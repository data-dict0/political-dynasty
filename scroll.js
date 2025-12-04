window.addEventListener('scroll', function() {
  const scrollDown = document.querySelector('.scroll-down');
  if (window.scrollY > 100) { // Hide after scrolling 100px
    scrollDown.style.opacity = '0';
    scrollDown.style.pointerEvents = 'none';
  } else {
    scrollDown.style.opacity = '1';
    scrollDown.style.pointerEvents = 'auto';
  }
});