// Hamburger Toggle
const hamburgerButton = document.getElementById('toggleMenu');
const sidebar = document.getElementsByClassName('sidebar')[0];
hamburgerButton.addEventListener('click', function() {
    if(hamburgerButton.classList.contains('is-active')) {
        hamburgerButton.classList.remove('is-active');
        sidebar.classList.remove('active');
    } else {
        hamburgerButton.classList.add('is-active');
        sidebar.classList.add('active');
    }
});

// Skills
const allProgressBars = document.getElementsByClassName('progress-bar');
for(el in allProgressBars) {
    const currentProgress = allProgressBars[el].dataset.percentage;
    allProgressBars[el].style.width = `${currentProgress}%`;
}