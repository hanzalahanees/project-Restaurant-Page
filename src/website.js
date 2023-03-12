import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add('header');

  //logo section start
  const logo = document.createElement("div");
  logo.appendChild(createImg("images/restaurant-logo_large.png", "Logo Image")).classList.add("img");
  header.appendChild(logo);


  const logoTitle = document.createElement('div');
  logoTitle.setAttribute("id", "title");
  header.appendChild(logoTitle);

  const logoLink = logoTitle.appendChild(createLink("index.html", ""));

  const heading = document.createElement('h1');
  heading.textContent = "David Chu's China Bistro";
  logoLink.appendChild(heading);

  const subHeading = document.createElement("p");
  subHeading.textContent = "KOSHER CERTIFIED";

  logoTitle.appendChild(subHeading);


  header.appendChild(navbar());
  return header;
}

function navbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.appendChild(createImg("images/home-custom.png", "Home-Button"));
  homeButton.appendChild(createSpan('Home'));
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");

  menuButton.appendChild(createImg("images/silverware-fork-knife-custom.png", "menuButton"));
  menuButton.appendChild(createSpan('Menu'));
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });


  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  return navbar;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createLink(href, text) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;

  return link;
}
function createImg(src, alt) {
  const getImg = document.createElement('img');
  getImg.src = src;
  getImg.alt = alt;

  return getImg;
}

function createSpan(text) {
  const span = document.createElement('span');
  span.textContent = text;
  span.setAttribute("id", "span");

  return span;
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  // main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  const footerText = document.createElement("div");
  footerText.textContent = "© Copyright David Chu's China Bistro 2023.";

  footer.appendChild(footerText);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
}

export default initializeWebsite;
