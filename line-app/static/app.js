var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'white';

// trigger this function every time the user scrolls
window.onscroll = function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  const heightDisplay = document.getElementById('heightDisplay');
  const startingPoint = 0;
  var fadeImage = document.getElementById("fadeImage");

  var line = document.querySelector('.line');
  line.style.height = scrollTop + 'px';

  // set the shown height of the carbon
  const height = scrollTop - startingPoint;
  line.style.height = `${height}px`;
  heightDisplay.textContent = `Carbon: ${height} g`;

  var scroll = window.scrollY;
  if (scroll < 5) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.05')
    spamFilter.classList.add("show");
    shortEmailPhones.classList.add("show");
  }
  else if (scroll >= 5 && scroll < 10) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.2')
    spamFilter.classList.add("hide");
    spamFilter.classList.remove("show");
  }
  else if (scroll >= 7 && scroll < 14) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.4')
    shortEmailPhones.classList.add("hide");
    shortEmailPhones.classList.remove("show");

    shortEmailLaptops.classList.add("show");
  }
  else if (scroll >= 12 && scroll < 20) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.4')
    shortEmailLaptops.classList.add("hide");
    shortEmailLaptops.classList.remove("show");

    googleSearch.classList.add("show");
  }
  else if (scroll >= 16 && scroll < 24) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.8')
    googleSearch.classList.add("hide");
    googleSearch.classList.remove("show");

    shortText.classList.add("show");
  }
  
  
  else if (scroll < 600) {
    body.style.backgroundColor = 'white';
    // fetch('/on?time=.1')
  } else if (scroll >= 600 && scroll < 700) {
    // fetch('/on?time=5')
  } else if (scroll >= 700 && scroll < 1200) {
    body.style.backgroundColor = 'rgb(255, 237, 237)';
    iphoneEmails.style.top = '100vh';
    macbooks.style.top = '100vh';
  } else if (scroll >= 1200 && scroll < 1800) {
    body.style.backgroundColor = 'rgb(231, 178, 178)';
    iphoneEmails.classList.add("show");
    iphoneEmails.style.top = (100 - ((scroll - 1200) / 6)) + 'vh';
    macbooks.classList.add("show");
    macbooks.style.top = (100 - ((scroll - 1500) / 6)) + 'vh';
  } else if (scroll >= 1800 && scroll < 2600) {
    iphoneEmails.classList.remove("show");
    macbooks.classList.remove("show");
    body.style.backgroundColor = 'rgb(207, 119, 119)';
  } else if (scroll >= 2600 && scroll < 3600) {
    body.style.backgroundColor = 'rgb(183, 61, 61)';
  } else if (scroll >= 3600 && scroll < 4800) {
    body.style.backgroundColor = 'rgb(159, 6, 6)';
  } else if (scroll >= 4800 && scroll < 5800) {
    body.style.backgroundColor = 'rgb(138, 0, 0)';
  } else if (scroll >= 5800 && scroll < 6800) {
    body.style.backgroundColor = 'rgb(117, 0, 0)';
  } else if (scroll >= 6800 && scroll < 7800) {
    body.style.backgroundColor = 'rgb(96, 0, 0)';
  } else if (scroll >= 7800 && scroll < 9000) {
    body.style.backgroundColor = 'rgb(96, 0, 0)';
  } else if (scroll >= 9000 && scroll < 9200) {
    body.style.backgroundColor = 'rgb(96, 9, 9)';
  } else if (scroll >= 9200 && scroll < 10000) {
    body.style.backgroundColor = 'rgb(96, 18, 18)';
  } else {
    body.style.backgroundColor = 'rgb(96, 18, 18)';
  }
}
