const audio = new Audio('fucking-nothing.mp3')

const loli = document.getElementById('loli')
const staticLoli = document.getElementById('static-loli')

let playing = false;

audio.onended = () => {
  playing = false
}

document.addEventListener('click', () => {
  if (!playing) {
    playing = true
    audio.play()
    loli.classList.remove('animate')
    void loli.offsetWidth;
    loli.classList.add('animate')
  }
})
