;(function () {
  console.log('DOMContentLoaded')
  const containerId = 'adfree_sz_games_header_desktop'
  const container = document.getElementById(containerId)
  const key = 'f134bb3fd64babb1f2e9d55102c3b8f1'
  const width = 728
  const height = 90

  if (!container) {
    console.log('Container not found')
    return
  }
  console.log('Container found')
  let injected = false

  function injectAd() {
    if (injected) return
    console.log('Injecting ad')
    injected = true

    container.innerHTML = '' // Clear existing content (remove AdX banner if present)
    container.style.width = `${width}px`
    container.style.height = `${height}px`

    const iframe = document.createElement('iframe')
    iframe.width = width
    iframe.height = height
    iframe.frameBorder = '0'
    iframe.scrolling = 'no'
    iframe.style.border = 'none'
    iframe.style.display = 'block'
    iframe.style.margin = '0 auto'
    iframe.style.padding = '0'

    const srcdoc = `
              <style>body { margin: 0; padding: 0; overflow: hidden; }</style>
              <script type='text/javascript'>
                atOptions = {
                  key: '${key}',
                  format: 'iframe',
                  height: ${height},
                  width: ${width},
                  params: {}
                };
              </script>
              <script type='text/javascript' src='https://cutleryneighbouringpurpose.com/${key}/invoke.js'></script>`

    iframe.srcdoc = srcdoc
    container.appendChild(iframe)
    console.log('Ad injected')
  }

  setTimeout(() => {
    injectAd()
  }, 100)
})()
