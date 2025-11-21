// ------------------------------
// NAVBAR MENU TOGGLE
// ------------------------------
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}



// ------------------------------
// GALLERY LIGHTBOX (Gallery Page)
// ------------------------------
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      }
    });
  });
}

function closeLightbox() {
  if (lightbox) {
    lightbox.style.display = "none";
  }
}



// ------------------------------
// CONTACT FORM SUCCESS MESSAGE
// ------------------------------
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (successMsg) {
      successMsg.style.display = "block";

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    }
  });
}



// ------------------------------
// SMOOTH SCROLL (optional)
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
