//TODO: Figure out why this line of code doesn't work
//      (Maybe because this only works with vue?)
//import "styles.css";

// Part 1
let mainEl = document.querySelector("main")
mainEl.setAttribute("style", "background-color:var(--main-bg)")
mainEl.innerHTML = "<h1>DOM MANIPULATION</h1>"
mainEl.setAttribute("class", "flex-ctr")

//Part 2
//TODO: figure out why I can't see bar
let topMenuEl = document.getElementById("top-menu")
// /mainEl.insertBefore(topMenuEl, mainEl.firstChild)
topMenuEl.setAttribute("height", "100%") //TODO: change to use style
topMenuEl.setAttribute("style", "background-color:var(--top-menu-bg)")
topMenuEl.setAttribute("class", "flex-around")

