const menuItems = document.querySelectorAll('.menu-li')
const menuBoxes = document.querySelectorAll('.menu-item-box')

const visible = (el) => el.classList.add('visible')
const invisible = (el) => el.classList.remove('visible')

for(let i=0; i<4; i++) {
  menuItems[i].addEventListener('mouseover', () => {visible(menuBoxes[i])})
  menuItems[i].addEventListener('mouseout', () => {invisible(menuBoxes[i])})
  menuBoxes[i].addEventListener('mouseover', () => {visible(menuBoxes[i])})
  menuBoxes[i].addEventListener('mouseout', () => {invisible(menuBoxes[i])})
  //set left position for menu boxes
  menuItems[i].addEventListener('mouseover', () => {setLeftPosition(menuItems[i], menuBoxes[i])})
}

//aligns the center of the menu top item with the matching menu box axis
const setLeftPosition = (menuItem, menuBox) => {
  const indent1 = menuItems[0].offsetLeft
  let menuBoxAxis = 3 //location of the menu box axis - the menu box width is divided by this variable
  document.documentElement.style.setProperty("--menu-box-indent", (menuItem.offsetLeft-indent1-menuBox.clientWidth/menuBoxAxis+menuItem.clientWidth/2) + "px")
}
