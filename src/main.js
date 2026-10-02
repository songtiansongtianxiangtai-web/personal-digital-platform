import "./style.css";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航菜单");
  navigation.classList.remove("is-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "打开导航菜单" : "关闭导航菜单");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

