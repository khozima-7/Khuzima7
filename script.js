// إعداد نسب الخبرة لكل لغة
const skills = {
    'html-bar': 90,      // نسبة خبرتك في HTML
    'css-bar': 80,       // نسبة خبرتك في CSS
    'js-bar': 70         // نسبة خبرتك في JavaScript
};

window.addEventListener('DOMContentLoaded', () => {
    Object.entries(skills).forEach(([id, percent]) => {
        const bar = document.getElementById(id);
        if (bar) {
            bar.style.width = percent + '%';
        }
    });
});
