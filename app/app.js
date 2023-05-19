const sections = document.querySelectorAll('.action');
const stickyOffset = 10;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionPosition = section.offsetTop;

    if (
      scrollPosition >= sectionPosition - stickyOffset &&
      scrollPosition <= sectionPosition + stickyOffset
    ) {
      section.style.position = 'sticky';
    } else {
      section.style.position = 'absolute';
    }
  });
});