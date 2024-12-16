import restaurantImage from "./restaurant.jpg";

const homeContent = () => {
  const contentDiv = document.querySelector("#content");

  const createImage = () => {
    const welcomeImage = document.createElement("img");
    welcomeImage.src = restaurantImage;
    welcomeImage.setAttribute("alt", "the cook sets up a plate");
    return welcomeImage;
  };

  const createTitle = () => {
    const welcomeTitle = document.createElement("h1");
    welcomeTitle.textContent = "White Coat Restaurant";
    return welcomeTitle;
  };

  const createParagraph = () => {
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.textContent = "You'll never want to leave.";
    return welcomeParagraph;
  };

  contentDiv.appendChild(createImage());
  contentDiv.appendChild(createTitle());
  contentDiv.appendChild(createParagraph());
};

export { homeContent };