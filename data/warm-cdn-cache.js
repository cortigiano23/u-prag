const fs = require('fs');
const path = require('path');
const https = require('https');

// Read the tracks.ts file
const tracksFile = path.join(__dirname, 'tracks.ts');
const tracksContent = fs.readFileSync(tracksFile, 'utf-8');

// Extract the tracks array from the file
const tracksMatch = tracksContent.match(/export const tracks: Track\[\] = (\[[\s\S]*?\]);/);
if (!tracksMatch) {
  console.error('Could not find tracks array in tracks.ts');
  process.exit(1);
}

// Parse the tracks array
const tracks = eval(tracksMatch[1]);

// Function to make a HEAD request to check if file exists
function checkFile(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(`✅ ${url} - Cached`);
        resolve(true);
      } else {
        console.error(`❌ ${url} - Failed (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`❌ ${url} - Error: ${err.message}`);
      resolve(false);
    });
  });
}

// Function to process all files
async function warmCache() {
  console.log('🔥 Starting CDN cache warm-up...');
  console.log(`Found ${tracks.length} tracks to process\n`);

  let successCount = 0;
  let failCount = 0;

  for (const track of tracks) {
    const files = track.files;
    if (!files) continue;

    for (const [format, url] of Object.entries(files)) {
      if (!url) continue;
      
      console.log(`\nProcessing: ${track.title} (${format})`);
      const success = await checkFile(url);
      
      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // Add a small delay between requests to avoid overwhelming the CDN
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log('\n📊 Cache warm-up complete!');
  console.log(`✅ Successfully cached: ${successCount} files`);
  console.log(`❌ Failed to cache: ${failCount} files`);
}

// Run the cache warm-up
warmCache().catch(console.error); 