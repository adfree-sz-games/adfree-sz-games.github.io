function createAdDivs() {
  const adConfigs = [
    {
      id: 'sz_games_sidebar_left_desktop',
      className: 'side_ad_left',
    },
    {
      id: 'sz_games_sidebar_right_desktop',
      className: 'side_ad_right',
    },
    {
      id: 'sz_games_anchor_top_responsive',
      className: 'ads',
    },
    {
      id: 'sz_games_anchor_bottom_responsive',
      className: 'ads',
    },
  ]

  adConfigs.forEach((config) => {
    // Create the main div
    const adDiv = document.createElement('div')
    adDiv.id = config.id
    adDiv.className = config.className

    // Create the script element
    const script = document.createElement('script')
    script.textContent = `
      googletag.cmd.push(function () {
        googletag.display('${config.id}')
      })
    `

    // Append script to div
    adDiv.appendChild(script)

    // Append div to document body
    document.body.appendChild(adDiv)
  })
}

// Execute when the document is fully loaded
if (document.readyState === 'complete') {
  createAdDivs()
} else {
  window.addEventListener('load', createAdDivs)
}
