const slider = document.getElementById('sliders')
const images = slider.querySelectorAll('img')
const circlesBlock = document.getElementById('circles')
let circles = []

const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
let currentImage = 0;

(function createCircles() {
  for (let i = 0; i < images.length; i++) {
    const circle = document.createElement('button')
    circle.classList.add('circle')
    circlesBlock.appendChild(circle)
    circles.push(circle)
  }
  circles[0].classList.add('active')
}())

async function move(count, side, speed) {
  prevButton.setAttribute('disabled', 'disabled')
  nextButton.setAttribute('disabled', 'disabled')
  circles.forEach(circle => circle.setAttribute('disabled', 'disabled'))
  circles[currentImage].classList.remove('active')
  for (let index = 1; index < count + 1; index++) {
    let i = 0
    let next
    if (side == 1) next = currentImage === images.length - 1 ? 0 : currentImage + 1
    else next = currentImage === 0 ? images.length - 1 : currentImage - 1
    images[next].style.right = (-400 * side) + 'px'
    images[next].classList.remove('invisible')
    await new Promise(resolve => {
      const timer = setInterval(() => {
        i = i + 2.5 * speed
        images[currentImage].style.right = (i * side) + 'px'
        images[next].style.right = (-400 * side + i * side) + 'px'
        if (i >= 400) {
          clearInterval(timer)
          resolve()
        }
      }, 6.25)
    })
    images[currentImage].classList.add('invisible')
    images[currentImage].style.right = null
    images[next].style.right = null
    currentImage = next
  }
  circles[currentImage].classList.add('active')
  prevButton.removeAttribute('disabled')
  nextButton.removeAttribute('disabled')
  circles.forEach(circle => circle.removeAttribute('disabled'))
}

prevButton.addEventListener('click', () => move(1, -1, 1))

nextButton.addEventListener('click', () => move(1, 1, 1))

circles.forEach((item, index) => {
  item.addEventListener('click', async () => {
    index > currentImage ? move(Math.abs(index - currentImage), 1, Math.abs((index - currentImage))) : currentImage > index && move(Math.abs(index - currentImage), -1, Math.abs((currentImage - index)))
  })
})