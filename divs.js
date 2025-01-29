function createAdDivs() {
  const adConfigs = [
    {
      id: 'adfree_sz_games_github_io_sidebar_left_desktop',
      className: 'side_ad_left',
    },
    {
      id: 'adfree_sz_games_github_io_sidebar_right_desktop',
      className: 'side_ad_right',
    },
    {
      id: 'adfree_sz_games_github_io_anchor_top_responsive',
      className: 'ads',
    },
    {
      id: 'adfree_sz_games_github_io_anchor_bottom_responsive',
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
console.log('divs.js loaded')
