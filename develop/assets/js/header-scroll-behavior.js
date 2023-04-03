const header = document.querySelector(".header");
const blocks = [...document.querySelectorAll(".block")];
const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
  window.scrollY > 30
    ? header.classList.add("header--fold")
    : header.classList.remove("header--fold");

  blocks.forEach((block) => {
    window.scrollY + window.innerHeight >
    block.offsetTop + block.offsetHeight / 2
      ? block.classList.add("block--visible")
      : block.classList.remove("block--visible");
  });

  window.scrollY > 30
    ? banner.classList.add("banner--scrolled")
    : banner.classList.remove("banner--scrolled");
});

console.log("ok");
