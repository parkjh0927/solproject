/**
 * 
 */

window.addEventListener('scroll', toggleScrollButton);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideScrollButton();
}

function toggleScrollButton() {
    var scrollButton = document.querySelector('.btn_topWrap');
    if (window.scrollY > 0) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

function hideScrollButton() {
    var scrollButton = document.querySelector('.btn_topWrap');
    scrollButton.style.display = 'none';
}
