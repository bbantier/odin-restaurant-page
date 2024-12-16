import { homeContent } from "./homeTab";
import { menuContent } from "./menuTab";

const menuButton = document.querySelector("#menu-button");

const clearContentDiv = () => {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.hasChildNodes()) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  homeContent();
});

menuButton.addEventListener("click", () => {
  clearContentDiv();
  menuContent();
});
