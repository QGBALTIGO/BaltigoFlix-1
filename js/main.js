"use strict";

// Header Scroll Effect
var header = document.querySelector("[data-header]");
var activeClass = "active";

function scrollHeader() {
  window.scrollY >= 100 ? header.classList.add(activeClass) : header.classList.remove(activeClass);
}

function addEventOnScrollHeader() {
  window.addEventListener("scroll", scrollHeader);
}

addEventOnScrollHeader();

// Smooth Scroll for Internal Links
var internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

function getMenuHeight() {
  return document.querySelector(".header").getBoundingClientRect().height;
}

function getTopFromElement(e) {
  var target = e.currentTarget.getAttribute("href");
  return document.querySelector(target).offsetTop - getMenuHeight();
}

function scrollToPosition(position) {
  smoothScrollTo(0, position);
}

function scrollTo(e) {
  e.preventDefault();
  var position = getTopFromElement(e);
  scrollToPosition(position);
}

function addSmoothScrollEvent() {
  internalLinks.forEach(function(link) {
    link.addEventListener("click", scrollTo);
  });
}

addSmoothScrollEvent();

// Smooth Scroll Function
function smoothScrollTo(x, y, duration = 400) {
  var startX = window.scrollX || window.pageXOffset;
  var startY = window.scrollY || window.pageYOffset;
  var distanceX = x - startX;
  var distanceY = y - startY;
  var startTime = new Date().getTime();

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  var interval = setInterval(function() {
    var currentTime = new Date().getTime() - startTime;
    var newX = easeInOutQuad(currentTime, startX, distanceX, duration);
    var newY = easeInOutQuad(currentTime, startY, distanceY, duration);

    window.scrollTo(newX, newY);

    if (currentTime >= duration) {
      clearInterval(interval);
    }
  }, 1000 / 60);
}

// Mobile Menu Toggle
var btnMobile = document.querySelector("[data-mobile-button]");
var menu = document.querySelector("[data-menu]");
var html = document.documentElement;

function openMenu() {
  menu.classList.add(activeClass);
  btnMobile.classList.add(activeClass);
  setTimeout(function() {
    html.addEventListener("click", closeMenu);
  });
}

function closeMenu(e) {
  menu.classList.remove(activeClass);
  btnMobile.classList.remove(activeClass);
  setTimeout(function() {
    html.removeEventListener("click", closeMenu);
  });
}

function addMenuEvent() {
  btnMobile.addEventListener("click", openMenu);
}

addMenuEvent();

// Highlight Active Section in Menu
var sections = document.querySelectorAll("section[id]");

function scrollActive() {
  var scrollPosition = window.pageYOffset;

  sections.forEach(function(section) {
    var sectionHeight = section.offsetHeight;
    var sectionTop = section.offsetTop - 200;
    var sectionId = section.getAttribute("id");

    if (sectionTop < scrollPosition && scrollPosition <= sectionTop + sectionHeight) {
      document.querySelector(".menu li a[href*=" + sectionId + "]").classList.add(activeClass);
    } else {
      document.querySelector(".menu li a[href*=" + sectionId + "]").classList.remove(activeClass);
    }
  });
}

function addScrollSectionEvent() {
  window.addEventListener("scroll", scrollActive);
}

scrollActive();
addScrollSectionEvent();
