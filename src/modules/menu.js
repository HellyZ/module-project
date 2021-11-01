const menu = () => {
  const menu = document.querySelector("menu");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      menu.classList.toggle("active-menu");
    }
    else if (
      e.target.classList.contains("close-btn") ||
      e.target.matches("menu ul>li>a") || !e.target.closest("menu")
    ) {
      menu.classList.remove("active-menu");
    }
  });
};

export default menu;
