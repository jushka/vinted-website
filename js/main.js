// Search bar variables
var searchBarLeftDesktop = document.querySelector("#searchBarLeftDesktop");
var searchBarDropdownDesktop = document.querySelector("#searchBarDropdownDesktop");
var searchBarDropdownLinksDesktop = document.querySelectorAll("#searchBarDropdownDesktop a");
var searchBarLeftTextDesktop = document.querySelector("#searchBarLeftDesktop p span");
var searchBarInputDesktop = document.querySelector("#searchBarRightDesktop input");
var deleteBtnDesktop = document.querySelector("#deleteBtnDesktop");

var searchBarLeftMobile = document.querySelector("#searchBarLeftMobile");
var searchBarDropdownMobile = document.querySelector("#searchBarDropdownMobile");
var searchBarDropdownLinksMobile = document.querySelectorAll("#searchBarDropdownMobile a");
var searchBarLeftTextMobile = document.querySelector("#searchBarLeftMobile p span");
var searchBarInputMobile = document.querySelector("#searchBarRightMobile input");
var deleteBtnMobile = document.querySelector("#deleteBtnMobile");

var searchBarPlaceholders = {
  "Catalog": "Find an item",
  "Members": "Find a member",
  "Forum": "Search in forum",
  "Help Center": "Search by keyword"
};

// Register popup variables
var registerPopupBtns = document.querySelectorAll(".register-popup");
var registerOverlay = document.querySelector(".overlay");
var closeBtn = document.querySelector(".close-btn");

// Nav bottom variables
var navBottom = document.querySelector(".nav-bottom");
var womenMenuLink = document.querySelector("#womenMenuLink");
var womenMenu = document.querySelector("#womenMenu");
var menMenuLink = document.querySelector("#menMenuLink");
var menMenu = document.querySelector("#menMenu");
var kidsMenuLink = document.querySelector("#kidsMenuLink");
var kidsMenu = document.querySelector("#kidsMenu");
var aboutMenuLink = document.querySelector("#aboutMenuLink");
var aboutMenu = document.querySelector("#aboutMenu");
var mainCategories = document.querySelectorAll(".main-category");
var womenCategories = document.querySelectorAll("#womenMenu .categories");

// Mobile menu variables
var mobileMenu = document.querySelector("#mobileMenu");
var mobileMenuBtn = document.querySelector("#mobileMenuBtn");
var main = document.querySelector("main");
var openMobileMenuBtn = document.querySelector("#mobileMenuBtn .fa-bars");
var hideMobileMenuBtn = document.querySelector("#mobileMenuBtn .fa-times");

///////////////////////// Search bar /////////////////////////

// Open up desktop dropdown menu
searchBarLeftDesktop.addEventListener("click", function () {
  searchBarDropdownDesktop.classList.toggle("display-block");
});

// Close desktop dropdown menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest(".search-bar-dropdown") && !event.target.closest(".search-bar-left")) {
    searchBarDropdownDesktop.classList.remove("display-block");
  }
});

// Change desktop dropdown menu text and input text
for (var i = 0; i < searchBarDropdownLinksDesktop.length; i++) {
  searchBarDropdownLinksDesktop[i].addEventListener("click", function () {
    searchBarLeftTextDesktop.textContent = this.textContent;
    searchBarDropdownDesktop.classList.remove("display-block");
    searchBarInputDesktop.placeholder = searchBarPlaceholders[this.textContent];
    searchBarInputDesktop.focus();
  });
}

// Show desktop delete input button
searchBarInputDesktop.addEventListener("input", function () {
  if (searchBarInputDesktop.value !== "") {
    deleteBtnDesktop.classList.add("display-block");
  } else {
    deleteBtnDesktop.classList.remove("display-block");
  }
});

// Delete desktop input on click on delete button
deleteBtnDesktop.addEventListener("click", function () {
  searchBarInputDesktop.value = "";
  deleteBtnDesktop.classList.remove("display-block");
});

// Open up mobile dropdown menu
searchBarLeftMobile.addEventListener("click", function () {
  searchBarDropdownMobile.classList.toggle("display-block");
});

// Close mobile dropdown menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest("#searchBarDropdownMobile") && !event.target.closest("#searchBarLeftMobile")) {
    searchBarDropdownMobile.classList.remove("display-block");
  }
});

// Change mobile dropdown menu text and input text
for (var i = 0; i < searchBarDropdownLinksMobile.length; i++) {
  searchBarDropdownLinksMobile[i].addEventListener("click", function () {
    searchBarLeftTextMobile.textContent = this.textContent;
    searchBarDropdownMobile.classList.remove("display-block");
    searchBarInputMobile.placeholder = searchBarPlaceholders[this.textContent];
    searchBarInputMobile.focus();
  });
}

// Show mobile delete input button
searchBarInputMobile.addEventListener("input", function () {
  if (searchBarInputMobile.value !== "") {
    deleteBtnMobile.classList.add("display-block");
  } else {
    deleteBtnMobile.classList.remove("display-block");
  }
});

// Delete mobile input on click on delete button
deleteBtnMobile.addEventListener("click", function () {
  searchBarInputMobile.value = "";
  deleteBtnMobile.classList.remove("display-block");
});

///////////////////////// Register overlay /////////////////////////

// Display register overlay
registerPopupBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    registerOverlay.classList.add("display-block");
    registerOverlay.classList.add("fade");
  });
});

// Close register overlay
closeBtn.addEventListener("click", function () {
  registerOverlay.classList.remove("fade");
  setTimeout(function () { registerOverlay.classList.remove("display-block") }, 500);
});


///////////////////////// Nav bottom /////////////////////////

// Show women menu
womenMenuLink.addEventListener("click", function () {
  womenMenuLink.classList.toggle("active-link");
  womenMenu.classList.toggle("display-grid");
});

// Show relevant women menu category
for (var i = 0; i < mainCategories.length; i++) {
  mainCategories[i].addEventListener("click", function () {

    // remove active-category class
    for (var j = 0; j < mainCategories.length; j++) {
      mainCategories[j].classList.remove("active-category");
    }

    // set active-category class
    this.classList.add("active-category");

    // hide categories
    for (var k = 0; k < womenCategories.length; k++) {
      womenCategories[k].classList.remove("display-block");
    }

    // show relevant categories
    var selector = ".cat-" + this.textContent.toLowerCase().trim();
    var activeCategories = document.querySelectorAll(selector);
    for (var l = 0; l < activeCategories.length; l++) {
      activeCategories[l].classList.add("display-block");
    }
  });
}

// Show men menu
menMenuLink.addEventListener("click", function () {
  menMenuLink.classList.toggle("active-link");
  menMenu.classList.toggle("display-grid");
});

// Show kids menu
kidsMenuLink.addEventListener("click", function () {
  kidsMenuLink.classList.toggle("active-link");
  kidsMenu.classList.toggle("display-grid");
});

// Show about menu
aboutMenuLink.addEventListener("click", function () {
  aboutMenuLink.classList.toggle("active-link");
  aboutMenu.classList.toggle("display-grid");
});

// Close women menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest("#womenMenu") && !event.target.closest("#womenMenuLink")) {
    womenMenuLink.classList.remove("active-link");
    womenMenu.classList.remove("display-grid");
  }
});

// Close men menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest("#menMenu") && !event.target.closest("#menMenuLink")) {
    menMenuLink.classList.remove("active-link");
    menMenu.classList.remove("display-grid");
  }
});

// Close kids menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest("#kidsMenu") && !event.target.closest("#kidsMenuLink")) {
    kidsMenuLink.classList.remove("active-link");
    kidsMenu.classList.remove("display-grid");
  }
});

// Close about menu on click anywhere
document.addEventListener("click", function (event) {
  if (!event.target.closest("#aboutMenu") && !event.target.closest("#aboutMenuLink")) {
    aboutMenuLink.classList.remove("active-link");
    aboutMenu.classList.remove("display-grid");
  }
});

///////////////////////// Mobile menu /////////////////////////

mobileMenuBtn.addEventListener("click", function () {
  openMobileMenuBtn.classList.toggle("display-none");
  hideMobileMenuBtn.classList.toggle("display-none");
  mobileMenu.classList.toggle("display-block");
  navBottom.classList.toggle("display-none");
  main.classList.toggle("display-none");
})