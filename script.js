const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++
  console.log(activeSlide)
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgBody()
  setActiveSlide()
})
leftBtn.addEventListener('click', () => {
  activeSlide--
  console.log(activeSlide)
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBgBody()
  setActiveSlide()
})

setBgBody()

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
function setActiveSlide() {
  slides.forEach((slide) => {
    return slide.classList.remove('active')
  })
  slides[activeSlide].classList.add('active')
}
