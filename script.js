const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let isPlaying = false;

// Toggle play/pause
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener('play', () => {
  isPlaying = true;
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
  }
});

// Seek audio when user moves progress slider
progress.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

// Dummy prev/next buttons: you can expand with playlist logic
prevBtn.addEventListener('click', () => {
  alert('Previous song functionality can be added here!');
});

nextBtn.addEventListener('click', () => {
  alert('Next song functionality can be added here!');
});
