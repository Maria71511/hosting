// First Slider

jQuery(document).ready(function($) {
  $(".twoRowSliderContainer").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          rows: 2,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
