function createHome() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container");

    const jumbotron = document.createElement("div");
    jumbotron.classList.add("jumbotron");

    jumbotron.appendChild(createImg("images/jumbotron_1200.jpg", "Picture of Restaurant"));
    mainContainer.appendChild(jumbotron);

    //Home Tiles
    const homeTiles = document.createElement('div');
    homeTiles.classList.add("home-tiles");

    //menu-tile
    const menuTile = document.createElement('div');
    
    const menuTile2 = document.createElement('div');
    menuTile2.setAttribute("id", "menu-tile");


    menuTile2.appendChild(createSpan("Menu"));
    
    menuTile.appendChild(menuTile2);
    homeTiles.appendChild(menuTile);

    //specials-tile

    const specialTile = document.createElement('div');
    
    const specialTile2 = document.createElement('div');
    specialTile2.setAttribute("id", "specials-tile");

    specialTile2.appendChild(createSpan("Specials"));
    
    specialTile.appendChild(specialTile2);
    homeTiles.appendChild(specialTile);

    //map-tile

    const mapTile = document.createElement('div');
    const mapTileLink = mapTile.appendChild(createLink("https://goo.gl/maps/snV7i64uFiFRgdbZ8", ""));
    mapTileLink.setAttribute("target", "_blank");

    const mapTile2 = document.createElement('div');
    mapTile2.setAttribute("id", "map-tile");

    mapTile2.appendChild(createIframe());
    mapTile2.appendChild(createSpan("map"));
    mapTileLink.appendChild(mapTile2);

    homeTiles.appendChild(mapTile);

    mainContainer.appendChild(homeTiles);

    
    return mainContainer;
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

    return span;
}
function createIframe() {
    const iframe = document.createElement("iframe");
    // iframe.setAttribute("src","https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635903,-76.7116881,17z/data=!3m1!4b1!4m6!3m5!1s0x89c81a14e7817803:0xab20a0e99daa17ea!8m2!3d39.3635903!4d-76.7116881!16s%2Fg%2F1tt8d6_y");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "245");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("border", "0");
    iframe.setAttribute("allowfullscreen", "");

    return iframe;
}
function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;