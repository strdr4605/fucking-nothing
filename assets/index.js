(function () {
  'use strict';
  window.onload = () => {
    const audio = new Audio('assets/fucking-nothing.mp3');
    const body = document.getElementsByTagName('body')[0];
    let playing = false;
    audio.onended = () => void (playing = false);
    document.addEventListener('click', () => {
      if (playing) return;
      playing = true;
      audio.play();
      body.classList.remove('animate');
      void (body.offsetWidth);
      body.classList.add('animate');
    });
  }
})();
