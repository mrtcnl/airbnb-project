

window.onscroll = function() {headerFunction()};


let navbar1 = document.querySelector("#header");
let topMid1 = document.querySelector(".header-top-mid-container")
let topMid2 = document.querySelector(".header-top-mid-container2")
let headerMid = document.querySelector(".header-mid-container")
let headerBottom = document.querySelector('.header-bottom-container')

let sticky = navbar1.offsetTop;

function headerFunction() {
  if (window.scrollY >= 30) {
    navbar1.classList.add("sticky")
    topMid1.style.display = "none";
    topMid2.style.display = "inline";
    headerMid.style.display = "none";
    headerBottom.style.display = "flex"
  } else {
    navbar1.classList.remove("sticky");
    topMid2.style.display = "none";
    topMid1.style.display = "inline-flex";
    headerMid.style.display = "flex"
  }
}

function changeMidButton() {
  
  topMid1.style.display = "inline-flex";
  topMid2.style.display = "none";
  headerMid.style.display = "flex";
  headerBottom.style.display = "none"
}

// document.addEventListener('DOMContentLoaded', function () {
//   var carousel = document.getElementById('house-types-carousel-Indicators');
//   var bsCarousel = new bootstrap.Carousel(carousel, {
//     interval: false,
//     wrap: false
//   });

//   carousel.addEventListener('slid.bs.carousel', function () {
//     let nextBtn = document.getElementById('nextBtn');
//     let nextIcn = document.getElementById('nextIcon')
//     if (bsCarousel.isLast) {
//       nextBtn.style.display = 'none';
//       nextIcn.style.display = 'none';
//     } else {
//       nextBtn.style.display = 'block';
//     }
//   });
// });




function choosePlace(location) {

  let searchInput = document.getElementById('yer-search-input')
  console.log('search',searchInput)

  if (location === 'avrupa') {
    searchInput.value = "Avrupa"
  }
  if (location === 'italya') {
    searchInput.value = "İtalya"
  }
  if (location === 'gdoguasya') {
    searchInput.value = "Güneydoğu Asya"
  }
  if (location === 'yunanistan') {
    searchInput.value = "Yunanistan"
  }
  if (location === 'abd') {
    searchInput.value = "ABD"
  }

}

document.querySelector('.dropdown-calendar').addEventListener('click', function(event) {
  event.stopPropagation();
});

function addDayFunction(number) {
  
  let additionalDay = document.querySelectorAll('.additional-day')

  if (number === 'tam') {
    additionalDay[0].innerHTML = ""
    additionalDay[1].innerHTML = ""
  }
  if (number === '1gun') {
    additionalDay[0].innerHTML = " "+"±1"
    additionalDay[1].innerHTML = " "+"±1"
  }
  if (number === '2gun') {
    additionalDay[0].innerHTML = " "+"±2"
    additionalDay[1].innerHTML = " "+"±2"
  }
  if (number === '3gun') {
    additionalDay[0].innerHTML = " "+"±3"
    additionalDay[1].innerHTML = " "+"±3"
  }
  if (number === '7gun') {
    additionalDay[0].innerHTML = " "+"±7"
    additionalDay[1].innerHTML = " "+"±7"
  }
}

let count1 = 0;
  
  function increase1() {
    count1++;
    updateCounter1();
  }
  
  function decrease1() {
    count1--;
    updateCounter1();
  }
  
  function updateCounter1() {
    document.getElementById("counter1").innerText = count1;

    getTotalCount();    
  }

  let count2 = 0;

  function increase2() {
    count2++;
    updateCounter2();
  }
  
  function decrease2() {
    count2--;
    updateCounter2();
  }
  
  function updateCounter2() {
    document.getElementById("counter2").innerText = count2;

    getTotalCount();
  }

  

  let count3 = 0;

  function increase3() {
    count3++;
    updateCounter3();
  }
  
  function decrease3() {
    count3--;
    updateCounter3();
  }
  
  function updateCounter3() {
    document.getElementById("counter3").innerText = count3;

    getTotalCount();
  }

  let count4 = 0;

  function increase4() {
    count4++;
    updateCounter4();
  }
  
  function decrease4() {
    count4--;
    updateCounter4();
  }
  
  function updateCounter4() {
    document.getElementById("counter4").innerText = count4;
    getTotalCount();
  }

  function getTotalCount() {
    
    let guestNumber = document.getElementById('guest-number')

    if (count1+count2>0) {
      guestNumber.innerHTML = count1+count2+" "+"misafir"
    }
    else {
      guestNumber.innerHTML = "Misafir ekleyin"
    }

    if (count1+count2>0 && count3 > 0) {
      guestNumber.innerHTML += ", "+count3+" "+"bebek"
    }
    if (count1+count2>0 && count4 > 0) {
      guestNumber.innerHTML += ", "+count4+" "+"evcil hayvan"
    }

    if (guestNumber.innerHTML != "Misafir ekleyin" ) {
      guestNumber.style.color = "#222222";
      guestNumber.style.fontWeight = "bold"
    } else {
      guestNumber.style.color = "#989898";
      guestNumber.style.fontWeight = "lighter"
    }
  }

document.addEventListener('click', function (event) {
  var headerMidMenu = document.querySelector('.header-mid-menu');
  var menuButton = document.getElementById('menu-button');

  if (event.target === menuButton || event.target.closest('.header-mid-menu')) {
    return;
  }

  headerMidMenu.classList.remove('active');
});

function changeText(type) {

  let textElement = document.getElementById('yerin-turu-text')

  if (type === 'tumu') {
    textElement.innerText = "Odaları, tamamı sunulan evleri veya diğer konaklama türlerini arayın"
  }

  if (type === 'oda') {
    textElement.innerText = "Evde bir oda ve ortak alanlara erişim."
  }

  if (type === 'evinTamami') {
    textElement.innerText = "Tamamen size ait bir ev."
  }

}

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#DDDDDD', '#000000', controlSlider);
  if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
  } else {
      fromSlider.value = from;
  }
}
  
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#DDDDDD', '#000000', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
  } else {
      toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#DDDDDD', '#000000', toSlider);
if (from > to) {
  fromSlider.value = to;
  fromInput.value = to;
} else {
  fromInput.value = from;
}
}

function controlToSlider(fromSlider, toSlider, toInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#DDDDDD', '#000000', toSlider);
setToggleAccessible(toSlider);
if (from <= to) {
  toSlider.value = to;
  toInput.value = to;
} else {
  toInput.value = from;
  toSlider.value = from;
}
}

function getParsed(currentFrom, currentTo) {
const from = parseInt(currentFrom.value, 10);
const to = parseInt(currentTo.value, 10);
return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
const toSlider = document.querySelector('#toSlider');
if (Number(currentTarget.value) <= 0 ) {
  toSlider.style.zIndex = 2;
} else {
  toSlider.style.zIndex = 0;
}
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#DDDDDD', '#000000', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);



let isActive = false;

function toggleSearchIcon() {
  isActive = !isActive;

  if (isActive) {
    searchIconChange();
  } else {
    resetSearchIcon();
  }
}

function rangeDivColor() {
  let divElement = document.getElementsByClassName('price-range-div-item');
  let firstValue = parseInt(document.getElementById('fromInput').value);
  console.log(firstValue)
  let secValue = parseInt(document.getElementById('toInput').value);
  console.log(secValue)
  
  if (firstValue <= 12 && secValue >= 12) {
    divElement[0].style.backgroundColor = "#222222";
  } else {
    divElement[0].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 16 && secValue >= 16) {
    divElement[1].style.backgroundColor = "#222222";
  } else {
    divElement[1].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 18 && secValue >= 18) {
    divElement[2].style.backgroundColor = "#222222";
  } else {
    divElement[2].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 21 && secValue >= 21) {
    divElement[3].style.backgroundColor = "#222222";
  } else {
    divElement[3].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 24 && secValue >= 24) {
    divElement[4].style.backgroundColor = "#222222";
  } else {
    divElement[4].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 27 && secValue >= 27) {
    divElement[5].style.backgroundColor = "#222222";
  } else {
    divElement[5].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 30 && secValue >= 30) {
    divElement[6].style.backgroundColor = "#222222";
  } else {
    divElement[6].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 33 && secValue >= 33) {
    divElement[7].style.backgroundColor = "#222222";
  } else {
    divElement[7].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 36 && secValue >= 36) {
    divElement[8].style.backgroundColor = "#222222";
  } else {
    divElement[8].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 39 && secValue >= 39) {
    divElement[9].style.backgroundColor = "#222222";
  } else {
    divElement[9].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 42 && secValue >= 42) {
    divElement[10].style.backgroundColor = "#222222";
  } else {
    divElement[10].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 45 && secValue >= 45) {
    divElement[11].style.backgroundColor = "#222222";
  } else {
    divElement[11].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 48 && secValue >= 48) {
    divElement[12].style.backgroundColor = "#222222";
  } else {
    divElement[12].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 51 && secValue >= 51) {
    divElement[13].style.backgroundColor = "#222222";
  } else {
    divElement[13].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 55 && secValue >= 55) {
    divElement[14].style.backgroundColor = "#222222";
  } else {
    divElement[14].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 58 && secValue >= 58) {
    divElement[15].style.backgroundColor = "#222222";
  } else {
    divElement[15].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 61 && secValue >= 61) {
    divElement[16].style.backgroundColor = "#222222";
  } else {
    divElement[16].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 64 && secValue >= 64) {
    divElement[17].style.backgroundColor = "#222222";
  } else {
    divElement[17].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 67 && secValue >= 67) {
    divElement[18].style.backgroundColor = "#222222";
  } else {
    divElement[18].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 70 && secValue >= 70) {
    divElement[19].style.backgroundColor = "#222222";
  } else {
    divElement[19].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 74 && secValue >= 74) {
    divElement[20].style.backgroundColor = "#222222";
  } else {
    divElement[20].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 77 && secValue >= 77) {
    divElement[21].style.backgroundColor = "#222222";
  } else {
    divElement[21].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 80 && secValue >= 80) {
    divElement[22].style.backgroundColor = "#222222";
  } else {
    divElement[22].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 83 && secValue >= 83) {
    divElement[23].style.backgroundColor = "#222222";
  } else {
    divElement[23].style.backgroundColor = "#DDDDDD";
  }
  if (firstValue <= 86 && secValue >= 86) {
    divElement[24].style.backgroundColor = "#222222";
  } else {
    divElement[24].style.backgroundColor = "#DDDDDD";
  }
}


function searchIconChange() {
  let searchBtn = document.getElementById('mid-menu-search-button')
  let btnText = document.getElementById('search-icon-text')
  let midMenu = document.querySelector('.header-mid-menu')

  searchBtn.style.width = "110px"
  btnText.style.display = "inline"
  searchBtn.style.backgroundColor = "#D90A66"
  midMenu.style.backgroundColor = "#EBEBEB"
}

function resetSearchIcon() {
  let searchBtn = document.getElementById('mid-menu-search-button');
  let btnText = document.getElementById('search-icon-text');
  let midMenu = document.querySelector('.header-mid-menu')

  searchBtn.style.width = "";
  btnText.style.display = "none";
  searchBtn.style.backgroundColor = "#FE395C"
  midMenu.style.backgroundColor = "white"
}


document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.mid-button').forEach(item => {
    item.addEventListener('click', function(event) {
      let searchBtn = event.target;
      if (searchBtn.tagName === 'BUTTON') {
        isActive = true;
        searchIconChange();
      }
    });
  });

  document.addEventListener('click', function(event) {
    let clickedElement = event.target;
    if (clickedElement.tagName !== 'BUTTON') {
      isActive = false;
      resetSearchIcon();
    }
  });
});

let hr1 = document.querySelector('.mid-hr1')
let hr2 = document.querySelector('.mid-hr2')
let hr3 = document.querySelector('.mid-hr3')
let yerBtn = document.querySelector('.mid-menu-yer')
let girisBtn = document.querySelector('.mid-menu-giris')
let cikisBtn = document.querySelector('.mid-menu-cikis')
let kisiBtn = document.querySelector('.mid-menu-kisiler')

function hideHr1() {
  hr1.style.visibility = "hidden"
}
function showHr1() {
  hr1.style.visibility = "visible"
}

function hideHr2() {
  hr1.style.visibility = "hidden"
  hr2.style.visibility = "hidden"
}
function showHr2() {
  hr1.style.visibility = "visible"
  hr2.style.visibility = "visible"
}

function hideHr3() {
  hr3.style.visibility = "hidden"
  hr2.style.visibility = "hidden"
}
function showHr3() {
  hr3.style.visibility = "visible"
  hr2.style.visibility = "visible"
}

function hideHr4() {
  hr3.style.visibility = "hidden"
}
function showHr4() {
  hr3.style.visibility = "visible"
}

document.querySelectorAll(".carousel-card-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("card-link-active");
      link.setAttribute("aria-current", "page");
  }
});



function showMoreFunction1() {
  var dots = document.getElementById("showMoreDots1");
  var moreText = document.getElementById("showMoreDiv1");
  var btnText = document.getElementById("showMoreBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction2() {
  var dots = document.getElementById("showMoreDots2");
  var moreText = document.getElementById("showMoreDiv2");
  var btnText = document.getElementById("showMoreBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction3() {
  var dots = document.getElementById("showMoreDots3");
  var moreText = document.getElementById("showMoreDiv3");
  var btnText = document.getElementById("showMoreBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction4() {
  var dots = document.getElementById("showMoreDots4");
  var moreText = document.getElementById("showMoreDiv4");
  var btnText = document.getElementById("showMoreBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction5() {
  var dots = document.getElementById("showMoreDots5");
  var moreText = document.getElementById("showMoreDiv5");
  var btnText = document.getElementById("showMoreBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction6() {
  var dots = document.getElementById("showMoreDots6");
  var moreText = document.getElementById("showMoreDiv6");
  var btnText = document.getElementById("showMoreBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction7() {
  var dots = document.getElementById("showMoreDots7");
  var moreText = document.getElementById("showMoreDiv7");
  var btnText = document.getElementById("showMoreBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}

function showMoreFunction8() {
  var dots = document.getElementById("showMoreDots8");
  var moreText = document.getElementById("showMoreDiv8");
  var btnText = document.getElementById("showMoreBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha fazla göster ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha az göster";
    moreText.style.display = "inline";
  }
}