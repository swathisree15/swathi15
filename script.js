// Night/Day Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
    }
});

// Scroll Toggle Button
const scrollToggle = document.getElementById('scroll-toggle');
let isAtTop = true;

scrollToggle.addEventListener('click', () => {
    if (isAtTop) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        scrollToggle.innerHTML = '<i class="bx bx-chevron-down"></i>';
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollToggle.innerHTML = '<i class="bx bx-chevron-up"></i>';
    }
    isAtTop = !isAtTop;
});