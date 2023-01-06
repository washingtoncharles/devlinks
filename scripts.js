function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light-mode')) {
    html.classList.remove('light-mode')
  }else {
    html.classList.add('light-mode')
  }*/

  html.classList.toggle('light-mode')

  const img = document.querySelector("#profile img")

  if(html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/Avatar-light-mode.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}