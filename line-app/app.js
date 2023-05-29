var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'white';

// trigger this function every time the user scrolls
window.onscroll = function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heightDisplay = document.getElementById('heightDisplay');
  const startingPoint = 0;

  var line = document.querySelector('.line');
  line.style.height = scrollTop + 'px';

  // if (scrollTop > startingPoint) {
  const height = scrollTop - startingPoint;
  line.style.height = `${height}px`;
  heightDisplay.textContent = `Carbon: ${height} g`;
  // }

  var scroll = window.pageYOffset;
  if (scroll < 300) {
    body.style.backgroundColor = 'white';
  } else if (scroll >= 300 && scroll < 800) {
    body.style.backgroundColor = 'rgb(255, 237, 237)';
  } else if (scroll >= 800 && scroll < 1300) {
    body.style.backgroundColor = 'rgb(231, 178, 178)';
  } else if (scroll >= 1300 && scroll < 1800) {
    body.style.backgroundColor = 'rgb(207, 119, 119)';
  } else if (scroll >= 1800 && scroll < 2300) {
    body.style.backgroundColor = 'rgb(183, 61, 61)';
  } else if (scroll >= 2300 && scroll < 2800) {
    body.style.backgroundColor = 'rgb(159, 6, 6)';
  } else if (scroll >= 2800 && scroll < 3300) {
    body.style.backgroundColor = 'rgb(138, 0, 0)';
  } else if (scroll >= 3300 && scroll < 3800) {
    body.style.backgroundColor = 'rgb(117, 0, 0)';
  } else if (scroll >= 3800 && scroll < 4300) {
    body.style.backgroundColor = 'rgb(96, 0, 0)';
  } else if (scroll >= 4300 && scroll < 4800) {
    body.style.backgroundColor = 'rgb(96, 0, 0)';
  } else if (scroll >= 4800 && scroll < 5300) {
    body.style.backgroundColor = 'rgb(96, 9, 9)';
  } else if (scroll >= 5300 && scroll < 5800) {
    body.style.backgroundColor = 'rgb(96, 18, 18)';
  } else {
    body.style.backgroundColor = 'rgb(96, 18, 18)';
  }
}


// window.addEventListener('scroll', function () {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   var windowHeight = window.innerHeight;
//   var scrollProgress = scrollTop / (document.documentElement.scrollHeight - windowHeight);
//   const heightDisplay = document.getElementById('heightDisplay');
//   const startingPoint = 100;

//   var gradientBackground = document.querySelector('.gradient-background');
//   gradientBackground.style.opacity = scrollProgress;

//   var line = document.querySelector('.line');
//   line.style.height = scrollTop + 'px';

//   var gradientColor = Math.round(scrollProgress * 100); // Calculate color based on scroll progress
//   var red = 255 - gradientColor; // Calculate inverse color
//   gradientBackground.style.background = `linear-gradient(to bottom, white, rgb(${red}, 20, 20))`;


//   if (scrollTop > startingPoint) {
//     const height = scrollTop - startingPoint;
//     line.style.height = `${height}px`;
//     heightDisplay.textContent = `Carbon: ${height} g`;
//   }
// });