
document.querySelector('.cta-btn').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});


window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
