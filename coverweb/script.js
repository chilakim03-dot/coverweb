const songs = [
  { title: "MOVING ON - NMIXX (Cover)", file: "audio/movingon_cover_chila.mp3", cover: "img/cover1.jpg" },
  { title: "Tick-Tack - ILLIT (Cover)", file: "audio/칠라 Chila!✧ - Illit tick tack cover 2025-10-05 15_55.mp3", cover: "img/cover2.jpg" },
  { title: "How Sweet - NewJeans (Cover)", file: "audio/칠라 Chila!✧ - How Sweet Newjeans 2025-10-05 15_46.mp3", cover: "img/cover3.jpg" },
  { title: "Hold On Tight - Aespa (Cover)", file: "audio/칠라 Chila!✧ - hold on tight (aespa) 2025-10-05 17_09.mp3", cover: "img/cover4.jpg" },
  { title: "Drama (rap ver.) - Aespa (Cover)", file: "audio/칠라 Chila!✧ - drama ( rap ver. ) 2025-10-05 17_10.mp3", cover: "img/cover5.jpg" },
   { title: "Panorama (short ver.) - IZ*ONE (Cover)", file: "audio/칠라 Chila!✧ - panorama izone cover 2025-10-05 17_10.mp3", cover: "img/cover6.jpg" }
];

let currentSong = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('songTitle');
const coverArt = document.getElementById('coverArt');
const songList = document.getElementById('songList');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  songTitle.textContent = song.title;
  coverArt.src = song.cover;

  document.querySelectorAll('#songList li').forEach(li => li.classList.remove('active'));
  songList.children[index].classList.add('active');
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = song.title;
  li.onclick = () => {
    currentSong = index;
    loadSong(currentSong);
    audio.play();
  };
  songList.appendChild(li);
});

loadSong(currentSong);

// animasi cover muter pas play
audio.addEventListener('play', () => {
  coverArt.classList.add('rotate');
});

audio.addEventListener('pause', () => {
  coverArt.classList.remove('rotate');
});
