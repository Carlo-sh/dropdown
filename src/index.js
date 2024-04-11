import "./style.css";

const menu = document.getElementById("menu-title");
const menuList = document.getElementById("menu-list");

menu.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
  menuList.classList.toggle("hide");
});
