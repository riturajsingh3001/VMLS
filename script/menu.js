const menus = document.querySelectorAll(".topbar-right-img");
const closeBtns = document.querySelectorAll(".close-btn");
const menuContents = document.querySelectorAll(".menu");

menus.forEach((menu, index) => {
  menu.addEventListener("click", function () {
    menuContents[index].style.setProperty("left", "0", "important");
    menuContents[index].classList.add("active");
  });
});

closeBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    menuContents.forEach((content) => {
      content.style.left = "-200vw";
    });
    menuContents[index].classList.remove("active");
  });
});

// logo-link
let headerImgs = document.querySelectorAll(".header-img-02");

Array.from(headerImgs).forEach((headerImg) => {
  let link = document.createElement("a");
  link.href = "https://vmls.netlify.app/";
  headerImg.parentNode.insertBefore(link, headerImg);
  link.appendChild(headerImg);
});

// Function to check if there's a section ID in the URL and scroll to it
function scrollToSection() {
  var urlParams = new URLSearchParams(window.location.search);
  var sectionId = urlParams.get("section");
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Section not found with ID:", sectionId);
  }
}

window.onload = scrollToSection;

// go to top button
var goTopBtn = document.createElement("button");
goTopBtn.innerHTML = "&#9757;";
goTopBtn.style.display = "none";
goTopBtn.style.position = "fixed";
goTopBtn.style.bottom = "20px";
goTopBtn.style.right = "30px";
goTopBtn.style.zIndex = "9999";
goTopBtn.style.border = "none";
goTopBtn.style.outline = "none";
goTopBtn.style.backgroundColor = "#8d191c";
goTopBtn.style.color = "white";
goTopBtn.style.cursor = "pointer";
goTopBtn.style.padding = "15px";
goTopBtn.style.borderRadius = "50%";
goTopBtn.style.width = "4vw";
goTopBtn.style.height = "4vw";
goTopBtn.style.fontSize = "2vw";
goTopBtn.style.display = "flex";
goTopBtn.style.alignItems = "center";
goTopBtn.style.justifyContent = "center";
document.body.appendChild(goTopBtn);

function toggleGoTopButton() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

window.addEventListener("scroll", toggleGoTopButton);

toggleGoTopButton();

// Scroll to top when button is clicked
goTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// embedding-links head
// body

window.addEventListener("DOMContentLoaded", (event) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/dropdown.css";

  const head = document.head || document.getElementsByTagName("head")[0];
  const lastChild = head.lastElementChild;

  if (lastChild.tagName === "LINK") {
    head.insertBefore(link, lastChild.nextSibling);
  } else {
    head.appendChild(link);
  }

  const fontAwesomeLink = document.createElement("link");
  fontAwesomeLink.rel = "stylesheet";
  fontAwesomeLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";

  head.appendChild(fontAwesomeLink);

  const script = document.createElement("script");
  script.src = "./script/dropdown.js";

  document.body.appendChild(script);
});

// form-code
document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll("input#phone");
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.setAttribute("required", true);
    phoneInput.setAttribute("placeholder", "Enter your Mobile number*");
  });
});

// iqac footer link insertion
window.onload = function () {
  const footBottom = document.querySelector(".foot-bottom");

  const newLink = document.createElement("a");
  newLink.href = "iqac.html";
  newLink.textContent = "IQAC";

  footBottom.insertBefore(newLink, footBottom.firstChild);
};

// video-popup-js
// Function to extract video ID from a YouTube URL
function getYouTubeID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const videoThumbnails = document.querySelectorAll(".video-thumbnail");
const popup = document.getElementById("video-popup");
const popupVideo = document.getElementById("popup-video");
const closePopup = document.querySelector(".close-popup");

videoThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    const videoId = getYouTubeID(videoUrl); // Extract video ID from URL
    if (videoId) {
      popupVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      popup.style.display = "flex";
    }
  });
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none";
  popupVideo.src = ""; // Stop the video
});

window.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
    popupVideo.src = ""; // Stop the video
  }
});

// hover video insfrastructure
const infraColumns = document.querySelectorAll(".column-infra");

infraColumns.forEach((column) => {
  const img = column.querySelector("img");
  const videoSrc = column.getAttribute("data-video"); // Get video source from data attribute

  column.addEventListener("mouseenter", () => {
    // Create a video element
    const video = document.createElement("video");
    video.src = videoSrc; // Use the video source from the data attribute
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.classList.add("video-overlay"); // Add styling class
    video.playsInline = true; // Ensures compatibility on mobile

    // Hide the image and append the video
    img.style.display = "none";
    column.querySelector(".image-infra").appendChild(video);
  });

  column.addEventListener("mouseleave", () => {
    // Remove the video and show the image again
    const video = column.querySelector("video");
    if (video) {
      video.remove();
      img.style.display = "block";
    }
  });
});
