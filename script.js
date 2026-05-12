document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Effect logic ---
    const typingTexts = [
        "Full Stack Web Apps",
        "Mobile App Solutions",
        "Scalable Architectures",
        "Business APIs"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typewriterElement = document.getElementById('typewriter');

    function typeEffect() {
        if (!typewriterElement) return;

        if (textIndex === typingTexts.length) {
            textIndex = 0;
        }

        currentText = typingTexts[textIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentText.substring(0, charIndex);

        let typeSpeed = 100 - Math.random() * 50;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Delay start slightly
    setTimeout(typeEffect, 1000);

    // --- Scroll Animation logic using Intersection Observer ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opt: unobserve to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => animateOnScrollObserver.observe(el));
});
