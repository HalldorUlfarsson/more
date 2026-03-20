// slideshow.js - Simple Slideshow Functionality

class Slideshow {
    constructor(slides) {
        this.slides = slides;
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.showSlide();
        this.startSlideshow();
    }

    showSlide() {
        // Hide all slides
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.currentSlide ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide();
    }

    startSlideshow() {
        setInterval(() => this.nextSlide(), 3000); // Change slide every 3 seconds
    }
}

// Example usage
// const slides = document.querySelectorAll('.slide');
// const mySlideshow = new Slideshow(slides);