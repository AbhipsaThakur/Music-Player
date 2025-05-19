
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play');
    const progress = document.getElementById('progress');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    let isPlaying = false;

    // Format seconds into MM:SS
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Play / Pause toggle
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

    // When metadata is loaded, set duration
    audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
      progress.value = 0;
    });

    // Update progress & current time as audio plays
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;
        currentTimeEl.textContent = formatTime(audio.currentTime);
      }
    });

    // Seek audio when user interacts with progress bar
    progress.addEventListener('input', () => {
      if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
      }
    });

    // Dummy prev/next alerts for now
    prevBtn.addEventListener('click', () => {
      alert('Previous song functionality can be added here!');
    });

    nextBtn.addEventListener('click', () => {
      alert('Next song functionality can be added here!');
    });
