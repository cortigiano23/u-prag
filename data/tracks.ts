export type Track = {
  id: string;
  title: string;
  description: string;
  bpm?: number;
  length?: string;
  video?: string;
  form?: string;
  featuring?: string;
  instruments?: string[];
  year?: number;
  copyright?: string;
  catalogNumber?: string;
  isrc?: string;
  author?: string;
  interpret?: string;
  files: { [format: string]: string };
};

export const tracks: Track[] = [
  {
    "id": "1",
    "title": "The Bond",
    "description": "",
    "bpm": 90,
    "length": "02:44",
    "form": "instrumental",
    "featuring": "Pavel Bořkovec Quartet (strings)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_1",
    "isrc": "CZM982600001",
    "author": "Šimon Dvorský / Daniel Petkevič",
    "interpret": "U-Prag / Pavel Bořkovec Quartet",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/01_The Bond.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/01_The Bond.wav"
    }
  },
  {
    "id": "2",
    "title": "Kokpit",
    "description": "with MC Skiver J",
    "bpm": 180,
    "length": "04:33",
    "video": "https://www.youtube.com/watch?v=RTz3DYyJP6c",
    "form": "vocals",
    "featuring": "Ondřej Posejpal (guitar)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_2",
    "isrc": "CZM982600002",
    "author": "Šimon Dvorský / Daniel Petkevič",
    "interpret": "U-Prag",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/02_Kokpit.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/02_Kokpit.wav"
    }
  },
  {
    "id": "3",
    "title": "Small Talk",
    "description": "with Roman Vícha on drums",
    "bpm": 150,
    "length": "05:36",
    "form": "vocals",
    "featuring": "Roman Vícha (drums),\nPavel Bořkovec Quartet (strings)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_3",
    "isrc": "CZM982600003",
    "author": "Šimon Dvorský / Daniel Petkevič / Alasdair Bouch",
    "interpret": "U-Prag / Pavel Bořkovec Quartet",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/03_Small Talk.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/03_Small Talk.wav"
    }
  },
  {
    "id": "4",
    "title": "Feed The Beast",
    "description": "",
    "bpm": 190,
    "length": "01:45",
    "form": "instrumental",
    "featuring": "Ondřej Posejpal (guitar),\nPavel Bořkovec Quartet (strings)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_4",
    "isrc": "CZM982600004",
    "author": "Šimon Dvorský / Daniel Petkevič",
    "interpret": "U-Prag / Pavel Bořkovec Quartet",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/04_Feed The Beast.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/04_Feed The Beast.wav"
    }
  },
  {
    "id": "5",
    "title": "Fragments",
    "description": "",
    "bpm": 120,
    "length": "04:49",
    "form": "instrumental",
    "featuring": "Pavel Bořkovec Quartet (strings)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_5",
    "isrc": "CZM982600005",
    "author": "Šimon Dvorský / Daniel Petkevič",
    "interpret": "U-Prag / Pavel Bořkovec Quartet",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/05_Fragments.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/05_Fragments.wav"
    }
  },
  {
    "id": "6",
    "title": "Once Upon a Dream",
    "description": "",
    "bpm": 128,
    "length": "05:06",
    "form": "vocals",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_6",
    "isrc": "CZM982600006",
    "author": "Šimon Dvorský / Daniel Petkevič / Alasdair Bouch",
    "interpret": "U-Prag",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/06_Once Upon a Dream.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/06_Once Upon a Dream.wav"
    }
  },
  {
    "id": "7",
    "title": "Bedtime Hour",
    "description": "",
    "bpm": 120,
    "length": "04:47",
    "form": "instrumental",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_7",
    "isrc": "CZM982600007",
    "author": "Šimon Dvorský / Daniel Petkevič",
    "interpret": "U-Prag",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/07_Bedtime Hour.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/07_Bedtime Hour.wav"
    }
  },
  {
    "id": "8",
    "title": "All I Need to Be",
    "description": "",
    "bpm": 165,
    "length": "03:18",
    "form": "vocals",
    "featuring": "Pavel Bořkovec Quartet (strings)",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_8",
    "isrc": "CZM982600008",
    "author": "Šimon Dvorský / Daniel Petkevič / Alasdair Bouch",
    "interpret": "U-Prag / Pavel Bořkovec Quartet",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/08_All I Need To Be.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/08_All I Need To Be.wav"
    }
  },
  {
    "id": "9",
    "title": "Friend",
    "description": "for all our frineds!",
    "bpm": 100,
    "length": "04:10",
    "form": "vocals",
    "instruments": [],
    "year": 2026,
    "copyright": "Every Single Soul",
    "catalogNumber": "2026_9",
    "isrc": "CZM982600009",
    "author": "Šimon Dvorský / Daniel Petkevič / Alasdair Bouch",
    "interpret": "U-Prag",
    "files": {
      "mp3": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/09_Friend.mp3",
      "wav": "https://res.cloudinary.com/dje9jmjdd/video/upload/music/09_Friend.wav"
    }
  }
];