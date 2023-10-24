const sliderItems = document.querySelectorAll('.slider-item'),
	sliderButtonNext = document.getElementById('next'),
	sliderButtonPrev = document.getElementById('prev')

let index = 0

const activeSlide = n => {

	for (item of sliderItems) {
		item.classList.remove('active')
	}

	sliderItems[n].classList.add('active')

}

const nextSlide = () => {
	if (sliderItems.length - 1 == index) {
		index = 0
		activeSlide(index)
	} else {
		index++
		activeSlide(index)
	}


}
const prevSlide = () => {
	if (index == 0) {
		index = sliderItems.length - 1
		console.log(index)
		activeSlide(index)
	} else {
		index--
		activeSlide(index)
	}
}



sliderButtonNext.addEventListener('click', nextSlide)
sliderButtonPrev.addEventListener('click', prevSlide)