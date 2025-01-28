if (window.location.hostname === 'sz.games') {
  const script = document.createElement('script')
  script.src = '/gpt-sz-games.js'
  document.head.appendChild(script)
} else {
  const script = document.createElement('script')
  script.src = '/gpt.js'
  document.head.appendChild(script)
}
