// First Slider

jQuery(document).ready(function($) {
  $(".twoRowSliderContainer").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 1,
          rows: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Second Slider

jQuery(document).ready(function($) {
  $(".oneRowSliderContainer").slick({
    dots: false,
    infinite: true,
    speed: 600,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// mob slider

jQuery(document).ready(function($) {
  $("#sliderContainer").slick({
    dots: true,
    infinite: true,
    speed: 600,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false
  });
});

// tabs

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
function showPanel(panelIndex) {
  tabButtons.forEach(function(node) {
    node.style.backgroundColor = "";
  });
  tabPanels.forEach(function(node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "flex";
  tabButtons[panelIndex].style.backgroundColor = "#FFF";
}

tabButtons[0].style.backgroundColor = "#FFF";

// to contact modal
var tcModal = document.getElementById("toContact");
var tcClose = document.getElementsByClassName("tcCloseMenu-js")[0];

function openToContacts() {
  tcModal.style.display = "block";
}

tcClose.onclick = function() {
  tcModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === tcModal) {
    tcModal.style.display = "none";
  }
};

// about us modal

var about = document.getElementsByClassName("menu__item")[1];
var auModal = document.getElementById("aboutUs");
var auClose = document.getElementsByClassName("auCloseMenu-js")[0];

about.onclick = function() {
  auModal.style.display = "block";
};

auClose.onclick = function() {
  auModal.style.display = "none";
};

// price modal

var price = document.getElementsByClassName("menu__item")[2];
var pModal = document.getElementById("price");
var pClose = document.getElementsByClassName("pCloseMenu-js")[0];

price.onclick = function() {
  pModal.style.display = "block";
};

pClose.onclick = function() {
  pModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === pModal) {
    pModal.style.display = "none";
  }
};
