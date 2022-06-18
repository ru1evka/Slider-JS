let images = [{
    url: "img/slider.svg", 
    p__l: "Rostov-on-Don<br> LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months"
  }, {
    url: "img/sochiImg.png", 
    p__l: "Sochi<br> Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months"
  }, {
    url: "img/rostovImg.svg", 
    p__l: "Rostov-on-Don<br> Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months"
  }];

  function initSlider() {
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".slider__right");
    let sliderArrows = document.querySelector(".imgRun");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderButton = document.querySelector(".section__slider");

    let Cyti = document.querySelector(".p__l");
    let repairTime = document.querySelector(".repairTime");
    let apartmentArea = document.querySelector(".apartmentArea");
    
    initImages();
    initArrows();
    initDots();
    eventsMenu();

    function initImages() {
      images.forEach((image, index) => {
        let imageCard = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`
        sliderImages.innerHTML += imageCard;
      });
    }

    function initArrows() {
      sliderArrows.querySelectorAll(".sliderArrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curSlide = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("prev")) {
            nextNumber = curSlide === 0? images.length - 1 : curSlide - 1;
          } else if (arrow.classList.contains("next")) {
            nextNumber = curSlide === images.length - 1? 0 : curSlide + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }

    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }

    function eventsMenu() {
      let menu = sliderButton.querySelectorAll(".sliderButton");
      menu.forEach(item => {
        item.addEventListener("click", function() {
          moveSlider(+this.dataset.index);
        });
      });
    }

    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
      sliderButton.querySelector(".active").classList.remove("active");
      sliderButton.querySelector(".n" + num).classList.add("active");
      Cyti.innerHTML = images[num].p__l;
      repairTime.innerHTML = images[num].repairTime;
      apartmentArea.innerHTML = images[num].apartmentArea;
    }
  } 

  document.addEventListener("DOMContentLoaded", function() {
    initSlider(); 
  });