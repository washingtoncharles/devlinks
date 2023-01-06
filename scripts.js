function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light-mode')) {
    html.classList.remove('light-mode')
  }else {
    html.classList.add('light-mode')
  }
}