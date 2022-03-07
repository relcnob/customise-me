let icon = "hamburger";

document.querySelector(".menu-icon").addEventListener("click", showMenu);
document.querySelector("#about").addEventListener("click", collapseDropdown);
document.querySelector("#account").addEventListener("click", collapseDropdown);

function showMenu() {
  document.querySelector("nav").classList.toggle("showMenu");
  if (icon == "hamburger") {
    icon = "cross";
    document.querySelector("nav img").src = "assets/icons/close_white_24dp.svg";
  } else {
    console.log("working");
    icon = "hamburger";
    document.querySelector("nav img").src = "assets/icons/menu_white_24dp.svg";
  }
}

function collapseDropdown() {
  this.classList.toggle("collapsed");
}
