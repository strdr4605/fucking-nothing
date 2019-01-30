const audio = new Audio('fucking-nothing.mp3')
const loli = document.getElementById('loli')

let playing = false;
audio.onended = () => playing = false
document.addEventListener('click', () => {
  if (playing) return
  playing = true
  audio.play()
  loli.classList.remove('animate')
  void loli.offsetWidth;
  loli.classList.add('animate')
})
