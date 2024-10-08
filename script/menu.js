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

window.onload = function () {
  // Get all image-box elements
  const imageBoxes = document.querySelectorAll(
    ".menu-main-right-row2 .image-box"
  );

  // Update the content of each image-box
  imageBoxes.forEach((imageBox, index) => {
    const textElement = imageBox.querySelector(".img-box-content > p");

    if (textElement) {
      if (index === 0) {
        // Update the content for the first image-box
        textElement.textContent =
          "Dive into the transformative journey of court digitization with VMLS's Center for Justice through Technology. Join us as we explore the visionary strides of Justice S. Muralidhar.";
      } else if (index === 1) {
        // Update the content for the second image-box
        textElement.textContent =
          "In commemoration of Constitutional Day, VMLS Global Tamil Law Center (GTLC) organized a legal literacy camp, aligning with the vision of Dr. B.R. Ambedkar to transform political democracy into social democracy.";
      }
    }
  });
};
