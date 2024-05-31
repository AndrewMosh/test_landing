(function () {
  var links = document.querySelectorAll('a[href*="#"]');
  if (links.length <= 0) return;
  var marginTop = 100;
  if (window.innerWidth <= 768) marginTop = 80;
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      marginTop = 80;
    }
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var blockID = link.getAttribute("href").substr(1);
      if (blockID && blockID !== "") {
        var elem = document.querySelector("#".concat(blockID));
        if (elem) {
          e.preventDefault();
          window.scrollBy({
            top: elem.getBoundingClientRect().top - marginTop,
            left: 0,
            behavior: "smooth"
          });
        }
      }
    });
  });
})();
(function () {
  var inputs = document.querySelectorAll('input[name="phone"]');
  if (!inputs.length) return;
  inputs.forEach(function (element) {
    element.addEventListener("input", function (e) {
      if (Number(e.target.value) === 8) {
        e.target.value = "";
      } else {
        IMask(element, {
          mask: "+7 (000) 000-00-00"
        });
      }
    });
  });
})();
(function () {
  var inputs = document.querySelectorAll('input[name="email"]');
  if (!inputs.length) return;
  inputs.forEach(function (element) {
    if (element) {
      var el = IMask(element, {
        mask: function mask(value) {
          if (/^[a-z0-9_\.-]+$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
          if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
          return false;
        },
        lazy: false
      });
    }
  });
})();
var slides = document.querySelectorAll(".main__slide");
var currentSlide = 0;
function showSlide(n) {
  slides[currentSlide].classList.remove("main__active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("main__active");
}
function nextSlide() {
  showSlide(currentSlide + 1);
}
setInterval(nextSlide, 5000);
(function () {
  var test = document.querySelector(".test");
  if (!test) return;
  new Swiper(".test__slider", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".test .sl-arrows__arrow--next",
      prevEl: ".test .sl-arrows__arrow--prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 30
      },
      980: {
        slidesPerView: 3
      }
    }
  });
})();
var parentBlocks = document.querySelectorAll(".services__item");
var childBlocks = document.querySelectorAll(".services__subpic");
parentBlocks.forEach(function (parent, index) {
  parent.addEventListener("mouseenter", function () {
    childBlocks[index].style.backgroundColor = "rgba(22, 22, 25, 0.75)";
  });
  parent.addEventListener("mouseleave", function () {
    childBlocks[index].style.backgroundColor = "rgb(114, 88, 220)";
  });
});
(function () {
  var parent = document.querySelector(".footer");
  if (!parent) return;
  var body = document.body;
  var html = document.documentElement;
  function fixedFooter() {
    var heightDoc = Math.max(body.offsetHeight, html.offsetHeight);
    var heightWindow = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
    heightDoc < heightWindow ? parent.classList.add("fixed") : parent.classList.remove("fixed");
  }
  window.addEventListener('resize', function () {
    if (parent.classList.contains("fixed")) parent.classList.remove("fixed");
    fixedFooter();
  });
  fixedFooter();
})();
(function () {
  var btnTop = document.querySelector(".btn-top");
  if (!btnTop) return;
  trackScroll(btnTop);
  window.addEventListener("scroll", function () {
    trackScroll(btnTop);
  });
  btnTop.addEventListener("click", backToTop);
  function trackScroll(el) {
    var scrolled = window.pageYOffset;
    var coords = 120;
    if (scrolled >= coords) {
      el.classList.add("show");
    }
    if (scrolled <= coords) {
      el.classList.remove("show");
    }
  }
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
})();
(function () {
  var menu = document.querySelector(".menu");
  if (!menu) return;
  var btn = menu.querySelector(".menu__btn");
  var body = document.querySelector("body");
  btn.addEventListener("click", function () {});
})();
(function () {
  var header = document.querySelector(".header");
  if (!header) return;
  var classForHeaderScroll = "scroll";
  var marginBottomFromElement = 0;
  var headerHeight = header.querySelector(".header__height");
  var headerContainer = header.querySelector(".header__container");
  addClassForElement(header);
  window.addEventListener("scroll", function () {
    addClassForElement(header);
  });
  window.addEventListener("resize", function () {
    addClassForElement(header);
  });
  function addClassForElement(el) {
    scrollHeight() > getMaxOfArray(headerContainer) ? el.classList.add(classForHeaderScroll) : el.classList.remove(classForHeaderScroll);
    if (headerHeight) {
      headerHeight.style.height = getMaxOfArray(headerContainer) + "px";
    }
  }
  function scrollHeight() {
    return Math.max.apply(null, [window.pageYOffset, document.documentElement.scrollTop]);
  }
  function getMaxOfArray(el) {
    return Math.max.apply(null, [el.clientHeight, el.offsetHeight]) + marginBottomFromElement;
  }
})();
(function () {
  var popup = document.querySelector(".popup");
  if (!popup) return;
  var popupBtnOpens = document.querySelectorAll(".open__popup");
  var formTitleInput = popup.querySelector('[name="formTitle"]');
  var descForm = popup.querySelector(".popup__desc");
  var popupWrap = popup.querySelector(".popup__wrap");
  var popupSuccess = popup.querySelector(".popup__success");
  var btnClose = popup.querySelector(".popup__close");
  var btnOverlay = popup.querySelector(".popup__overlay");
  var body = document.querySelector("body");
  function openPopup() {
    if (popupWrap.classList.contains("hide")) {
      popupWrap.classList.remove("hide");
    }
    if (popupSuccess.classList.contains("show")) {
      popupSuccess.classList.remove("show");
    }
    if (!popup.classList.contains("active")) {
      popup.classList.add("active");
    }
    if (!body.classList.contains("overflow")) {
      body.classList.add("overflow");
    }
  }
  function closePopup() {
    if (popupWrap.classList.contains("hide")) {
      popupWrap.classList.remove("hide");
    }
    if (popupSuccess.classList.contains("show")) {
      popupSuccess.classList.remove("show");
    }
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
    }
    if (body.classList.contains("overflow")) {
      body.classList.remove("overflow");
    }
  }
  popupBtnOpens.forEach(function (el) {
    el.addEventListener("click", function () {
      var title = el.nextElementSibling;
      descForm.style.display = "none";
      if (formTitleInput && title) {
        formTitleInput.value = title.innerHTML;
        descForm.innerHTML = title.innerHTML;
        descForm.style.display = "block";
      }
      openPopup();
    });
  });
  btnClose.addEventListener("click", function () {
    closePopup();
  });
  btnOverlay.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("popup__overlay")) {
      closePopup();
    }
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector(".preloader");
  if (!preloader) return;
  setTimeout(function () {
    document.querySelector(".preloader").classList.add("hide");
  }, 1000);
});