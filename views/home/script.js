document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "/views/auth/login.html";
});

document.getElementById("registerButton").addEventListener("click", function() {
    window.location.href = "/views/auth/register.html";
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselContainer = document.querySelector('.carousel-container');
const indicatorsContainer = document.querySelector('.carousel-indicators');

function createIndicators() {
    for (let i = 0; i < totalImages; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === currentIndex) indicator.classList.add('active');
        indicator.setAttribute('data-index', i);
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

function showSlide(index) {
    const imageWidth = images[0].clientWidth;
    const offset = -index * imageWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
    updateIndicators();
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

setInterval(nextSlide, 10000);

createIndicators();
showSlide(currentIndex);
