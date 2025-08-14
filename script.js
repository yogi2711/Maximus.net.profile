// Scroll ke bagian tertentu
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Efek animasi saat scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (pos < windowHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translate(0,0)";
        }
    });
});

// Efek tilt pada kartu layanan
document.querySelectorAll('.services .card').forEach(card => {
    card.addEventListener('mousemove', e => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        let rotateX = ((y - centerY) / centerY) * 6; 
        let rotateY = ((x - centerX) / centerX) * 6; 
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

// Scroll ke bagian tertentu
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Efek animasi saat scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (pos < windowHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translate(0,0)";
        }
    });
});

// Efek tilt pada kartu layanan
document.querySelectorAll('.services .card').forEach(card => {
    card.addEventListener('mousemove', e => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        let rotateX = ((y - centerY) / centerY) * 6; 
        let rotateY = ((x - centerX) / centerX) * 6; 
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

// Typing effect di hero
const text = "Selamat Datang di Maximus.Net";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;