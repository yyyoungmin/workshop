
const preview = document.createElement("div");
preview.classList.add("hover-preview");

const previewImg = document.createElement("img");
preview.appendChild(previewImg);

document.body.appendChild(preview);

const images = document.querySelectorAll("td img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    preview.style.display = "block";
    previewImg.src = img.src;
  });

  img.addEventListener("mousemove", (e) => {
    preview.style.left = e.clientX + 15 + "px";
    preview.style.top = e.clientY + 15 + "px";
  });

  img.addEventListener("mouseleave", () => {
    preview.style.display = "none";
  });
});
