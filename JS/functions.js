function showSection(sectionId) {
    const sections = document.querySelectorAll('.pageChoice');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }

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
