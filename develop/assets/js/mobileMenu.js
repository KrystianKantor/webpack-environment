document
  .querySelector(".mobile-menu-button")
  .addEventListener("click", (event) => {
    const button = event.target;
    const menu = document.querySelector(".header__nav-bar");
    const icons = document.querySelector(".header__icons");

    if (button.classList.contains("not-active")) {
      button.classList.remove("not-active");
      button.classList.add("active");
      menu.classList.add("active");
      icons.classList.add("active");
    } else {
      button.classList.remove("active");
      button.classList.add("not-active");
      menu.classList.remove("active");
      icons.classList.remove("active");
    }
  });
