// upload-audio.js

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// 💡 Získej své údaje z Cloudinary Dashboard:
// https://console.cloudinary.com/ -> Dashboard
cloudinary.config({
  cloud_name: 'dje9jmjdd',
  api_key: '576297379763726',
  api_secret: '7wLDXPI7k1bwiuVUflbjmd-PsZY'
});

// 📁 Cesta ke složce se soubory
const audioFolder = path.join(__dirname, 'public', 'audio');

// Promises pro sledování průběhu
const uploadPromises = [];
const failedUploads = [];

// Funkce pro nahrání souboru s opakováním
async function uploadWithRetry(filePath, baseName, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, {
          resource_type: 'video',
          public_id: `music/${baseName}`,
          overwrite: true,
          timeout: 60000 // 60 sekund timeout
        }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      console.log(`🔄 Opakuji nahrávání ${baseName} (pokus ${i + 2}/${retries})`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Počkáme 2 sekundy před dalším pokusem
    }
  }
}

fs.readdir(audioFolder, async (err, files) => {
  if (err) {
    return console.error('❌ Chyba při čtení složky:', err);
  }

  const audioFiles = files.filter(file => /\.(mp3|wav)$/i.test(file));
  console.log(`🎵 Nalezeno ${audioFiles.length} audio souborů k nahrání`);

  for (const [index, file] of audioFiles.entries()) {
      const filePath = path.join(audioFolder, file);
      const baseName = path.parse(file).name;
    const fileType = path.extname(file).toLowerCase();

    console.log(`\n📤 Nahrávám ${index + 1}/${audioFiles.length}: ${file}`);

    try {
      const result = await uploadWithRetry(filePath, baseName);
      console.log(`✅ ${file} ➜ ${result.secure_url}`);
    } catch (error) {
          console.error(`❌ Chyba u ${file}:`, error);
      failedUploads.push(file);
    }
  }

  if (failedUploads.length > 0) {
    console.log('\n⚠️ Některé soubory se nepodařilo nahrát:');
    failedUploads.forEach(file => console.log(`- ${file}`));
        } else {
    console.log('\n✨ Všechny soubory byly úspěšně nahrány!');
        }
});