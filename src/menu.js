function createMenuCategories() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  //heading
  const h2 = document.createElement("h2");
  h2.textContent = "Menu Categories";

  //menu-text
  const menuText = document.createElement("div");
  menuText.classList.add("menu-text");
  menuText.textContent = "Substituting white rice with brown rice or fried ricee after 3:00pm will be $1.50 for a pint and $2.50 for a quart.";

  const section = document.createElement("section");
  section.classList.add("menu-categories");

  //1
  const menu1 = document.createElement("div");
  const div1 = menu1.appendChild(createDiv("category-tile"));
  div1.appendChild(createImage());
  div1.appendChild(createSpan());
  menu1.appendChild(div1);
  section.appendChild(menu1);
  //2
  const menu2 = document.createElement("div");
  const div2 = menu1.appendChild(createDiv("category-tile"));
  div2.appendChild(createImage());
  div2.appendChild(createSpan());
  menu2.appendChild(div2);
  section.appendChild(menu2);
  //3
  const menu3 = document.createElement("div");
  const div3 = menu1.appendChild(createDiv("category-tile"));
  div3.appendChild(createImage());
  div3.appendChild(createSpan());
  menu3.appendChild(div3);
  section.appendChild(menu3);
  //4
  const menu4 = document.createElement("div");
  const div4 = menu4.appendChild(createDiv("category-tile"));
  div4.appendChild(createImage());
  div4.appendChild(createSpan());
  menu4.appendChild(div4);
  section.appendChild(menu4);
  //5
  const menu5 = document.createElement("div");
  const div5 = menu5.appendChild(createDiv("category-tile"));
  div5.appendChild(createImage());
  div5.appendChild(createSpan());
  menu5.appendChild(div5);
  section.appendChild(menu5);
  //6
  const menu6 = document.createElement("div");
  const div6 = menu6.appendChild(createDiv("category-tile"));
  div6.appendChild(createImage());
  div6.appendChild(createSpan());
  menu6.appendChild(div6);
  section.appendChild(menu6);
  //7
  const menu7 = document.createElement("div");
  const div7 = menu7.appendChild(createDiv("category-tile"));
  div7.appendChild(createImage());
  div7.appendChild(createSpan());
  menu7.appendChild(div7);
  section.appendChild(menu7);
  //8
  const menu8 = document.createElement("div");
  const div8 = menu8.appendChild(createDiv("category-tile"));
  div8.appendChild(createImage());
  div8.appendChild(createSpan());
  menu8.appendChild(div8);
  section.appendChild(menu8);
  //9
  const menu9 = document.createElement("div");
  const div9 = menu9.appendChild(createDiv("category-tile"));
  div9.appendChild(createImage());
  div9.appendChild(createSpan());
  menu9.appendChild(div9);
  section.appendChild(menu9);
  //10
  const menu10 = document.createElement("div");
  const div10 = menu10.appendChild(createDiv("category-tile"));
  div10.appendChild(createImage());
  div10.appendChild(createSpan());
  menu10.appendChild(div10);
  section.appendChild(menu10);

  mainContainer.appendChild(h2);
  mainContainer.appendChild(menuText);
  mainContainer.appendChild(section);

  return mainContainer;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
}
function createImage() {
  const img = document.createElement('img');

  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
      element.setAttribute(attr, attributes[attr]);
    });
  }
  const attributes = {
    src: "images/menu/B/B.jpg",
    width: "200",
    height: "200",
    alt: "Lunch Images",
  };
  Object.keys(attributes);
  setAttributes(img, attributes);
  
  return img;
}
function createSpan() {
  const span = document.createElement('span');
  span.textContent = "Lunch";

  return span;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";

  main.appendChild(createMenuCategories());
}
export default loadMenu;