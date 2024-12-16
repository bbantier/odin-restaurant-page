const menuContent = () => {
  const menuItems = [
    ["Veal chop", 65],
    ["Pork belly", 45],
    ["Purée du Chef", 20],
    ["Chateau Lapompe", 25, true],
    ["Mont Blanc water", 10, true],
  ];

  const contentDiv = document.querySelector("#content");

  class PageElement {
    constructor(tag, id, text) {
      this.tag = tag;
      this.id = id;
      this.text = text;
    }
  }

  const pageElements = [
    new PageElement("h1", "menu-title", "Menu"),
    new PageElement("h2", "entrees-title", "Entrees"),
    new PageElement("table", "entrees-table"),
    new PageElement("h2", "beverages-title", "Beverages"),
    new PageElement("table", "beverages-table"),
  ];

  for (let element of pageElements) {
    const el = document.createElement(element.tag);

    el.setAttribute("id", element.id);
    el.textContent = element.text;

    contentDiv.appendChild(el);
  }

  menuItems.forEach((item) => {
    const entreesTable = document.querySelector("#entrees-table");
    const beveragesTable = document.querySelector("#beverages-table");

    const createTableRow = () => {
      const tableRow = document.createElement("tr");
      const itemName = document.createElement("td");
      const itemPrice = document.createElement("td");

      itemName.textContent = item[0];
      itemPrice.textContent = item[1];

      tableRow.appendChild(itemName);
      tableRow.appendChild(itemPrice);

      return tableRow;
    };

    if (!item[2]) {
      entreesTable.appendChild(createTableRow());
    } else {
      beveragesTable.appendChild(createTableRow());
    }

  });
};

export { menuContent };