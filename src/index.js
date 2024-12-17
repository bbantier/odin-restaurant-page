import { homeContent } from "./homeTab";
import { menuContent } from "./menuTab";
import { aboutContent } from "./aboutTab";
import "./style.css";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

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

aboutButton.addEventListener("click", () => {
  clearContentDiv();
  aboutContent();
});
