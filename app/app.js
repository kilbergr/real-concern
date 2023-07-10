// function debounce(func, timeout = 100){
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }
// function saveInput(){
//   console.log('Saving data');
// }
// const processChange = debounce(() => saveInput());

const sections = document.querySelectorAll('.action');
const stickyOffset = window.innerHeight / 2;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionPosition = +section.getAttribute('data-position');
    console.log("9 scroll and section", scrollPosition, sectionPosition, section.innerHTML)

    if (
      scrollPosition >= sectionPosition - stickyOffset    &&
      scrollPosition <= sectionPosition + stickyOffset
    ) {
      section.style.top = stickyOffset + "px";
      section.style.position = 'sticky';
      console.log("16 scroll and section", scrollPosition, sectionPosition, section.innerHTML)
    } else {
      if (section.style.position == 'sticky') {
        section.style.top = section.offsetTop + "px"
        section.style.position = 'absolute';
        console.log("19 scroll and section", scrollPosition, sectionPosition, section.innerHTML)
      }
    }
  });
});