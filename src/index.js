import { homeContent } from "./homeTab";
import { menuContent } from "./menuTab";
import "./style.css";

const homeButton = document.querySelector("#home-button");
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

homeButton.addEventListener("click", () => {
  clearContentDiv();
  homeContent();
});

menuButton.addEventListener("click", () => {
  clearContentDiv();
  menuContent();
});