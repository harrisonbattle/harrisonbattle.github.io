function showSection(sectionId) {
    const sections = document.querySelectorAll('.pageChoice');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
})