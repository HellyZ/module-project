const menu = () => {
  const menu = document.querySelector("menu");
  const menuItems = document.querySelectorAll("menu ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
    }
    if (
      e.target.classList.contains("close-btn") ||
      e.target.matches("menu ul>li>a")
    ) {
      menu.classList.remove("active-menu");
    }
  });
};

export default menu;
