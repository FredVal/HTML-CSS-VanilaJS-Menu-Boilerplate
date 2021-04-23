const menuItems = document.querySelectorAll('li')
const menuBoxes = document.querySelectorAll('.menu-item-box')

// const firstMenuBox = document.getElementById('menu-item-first-box')
// const secondMenuBox = document.getElementById('menu-item-second-box')
// const thirdMenuBox = document.getElementById('menu-item-third-box')
// const fourthMenuBox = document.getElementById('menu-item-fourth-box')

const visible = (el) => {
  let a = true
  if(a=true) {
    el.classList.add('visible')
  }
}
const invisible = (el) => {
  let a = true
  if(a=true) {
    el.classList.remove('visible')
  }
}

for(let i=0; i<4; i++) {
  menuItems[i].addEventListener('mouseover', () => {visible(menuBoxes[i])})
  menuItems[i].addEventListener('mouseout', () => {invisible(menuBoxes[i])})
  menuBoxes[i].addEventListener('mouseover', () => {visible(menuBoxes[i])})
  menuBoxes[i].addEventListener('mouseout', () => {invisible(menuBoxes[i])})
}