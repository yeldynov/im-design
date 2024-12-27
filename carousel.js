const carousel = document.querySelector('.carousel-inner')
const items = document.querySelectorAll('.carousel-item')
const prevBtn = document.querySelector('.carousel-btn.prev')
const nextBtn = document.querySelector('.carousel-btn.next')
const progressBar = document.querySelector('.progress-line .progress')

let currentIndex = 0

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`
  progressBar.style.width = `${((currentIndex + 1) / items.length) * 100}%`
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length
  updateCarousel()
})

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length
  updateCarousel()
})

// Initialize progress bar
updateCarousel()
