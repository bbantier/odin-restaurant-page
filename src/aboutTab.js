const aboutContent = () => {
  const RESTAURANT_ADDRESS = "789 Pine Lane, New York, NY 10001";

  const contentDiv = document.querySelector("#content");
  const aboutTitle = document.createElement("h1");
  const addressDiv = document.createElement("div");
  const addressPar = RESTAURANT_ADDRESS.split(", ");

  aboutTitle.id = "about-title";
  aboutTitle.textContent = "About Us";

  addressDiv.id = "address-div";

  addressPar.forEach((part) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = part;
    addressDiv.appendChild(paragraph);
  });

  contentDiv.appendChild(aboutTitle);
  contentDiv.appendChild(addressDiv);
};

export { aboutContent };
