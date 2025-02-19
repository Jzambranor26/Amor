document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-music');
    const audio = document.getElementById('background-music');
  
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        this.textContent = 'Pausar Música';
      } else {
        audio.pause();
        this.textContent = 'Reproducir Música';
      }
    });
  });
  


