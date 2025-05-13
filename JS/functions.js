function showSection(sectionId) {
    const sections = document.querySelectorAll('.pageChoice');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
    // Lands on the front page of the website and allows for navigating through other pages
    const nav = document.querySelector('nav');
    if (nav) {
        if (sectionId === 'frontpage') {
            nav.classList.remove('scrolled');
        } else {
            nav.classList.add('scrolled');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('frontpage');
});
