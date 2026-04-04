
const images = document.querySelectorAll("td.full-img img");

let preview = document.createElement("div");
preview.classList.add("hover-preview");
document.body.appendChild(preview);

let isOpen = false;

images.forEach(img => {
  img.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isOpen) {
      preview.style.display = "none";
      isOpen = false;
      return;
    }

    preview.innerHTML = `<img src="${img.src}">`;
    preview.style.display = "block";

    // 화면 중앙에 띄우기
    preview.style.left = "50%";
    preview.style.top = "50%";
    preview.style.transform = "translate(-50%, -50%)";

    isOpen = true;
  });
});

// 바깥 클릭하면 닫힘
document.addEventListener("click", () => {
  preview.style.display = "none";
  isOpen = false;
});
