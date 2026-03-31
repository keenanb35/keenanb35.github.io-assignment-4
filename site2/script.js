// Commit 3: Data + thumbnails + click handler
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Create thumbnails
for (const image of images) {
  const thumb = document.createElement("img");
  thumb.src = baseURL + image.filename;
  thumb.alt = image.alt;
  thumb.tabIndex = 0;
  thumbBar.appendChild(thumb);
}

// Click handler for thumbnails
function updateDisplayedImage(event) {
  displayedImage.src = event.target.src;
  displayedImage.alt = event.target.alt;
}

for (const thumb of thumbBar.children) {
  thumb.addEventListener("click", updateDisplayedImage);
}
