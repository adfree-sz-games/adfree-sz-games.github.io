if (window.location.hostname === 'sz.games') {
  const script = document.createElement('script')
  script.src = '/divs-sz-games.js'
  document.body.appendChild(script)
} else {
  const script = document.createElement('script')
  script.src = '/divs.js'
  document.body.appendChild(script)
}
console.log('div-loader.js loaded')
