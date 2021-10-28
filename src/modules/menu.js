const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  closeBtn.addEventListener("click", handleMenu);
  menuBtn.addEventListener("click", handleMenu);
  menuItems.forEach((item) =>
    item.addEventListener("click", () => handleMenu())
  );
};

module.exports = menu;