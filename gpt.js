window.googletag = window.googletag || {}
googletag.cmd = googletag.cmd || []

googletag.cmd.push(function () {
  if (window.innerWidth >= 1200) {
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_1000x100_desktop_anchor_top',
        [
          [1000, 100],
          [970, 90],
          [728, 90],
          [990, 90],
          [970, 50],
          [960, 90],
          [950, 90],
          [980, 90],
        ],
        'adfree_sz_games_github_io_anchor_top_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_1000x100_desktop_anchor_bottom',
        [
          [1000, 100],
          [970, 90],
          [728, 90],
          [990, 90],
          [970, 50],
          [960, 90],
          [950, 90],
          [980, 90],
        ],
        'adfree_sz_games_github_io_anchor_bottom_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_300x600_desktop_side_left',
        [
          [300, 600],
          [160, 600],
          [300, 250],
          [300, 300],
        ],
        'adfree_sz_games_github_io_sidebar_left_desktop'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_300x600_desktop_side_right',
        [
          [300, 600],
          [160, 600],
          [300, 250],
          [300, 300],
        ],
        'adfree_sz_games_github_io_sidebar_right_desktop'
      )
      .addService(googletag.pubads())
  } else if (window.innerWidth >= 1024) {
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_1000x100_desktop_anchor_top',
        [
          [1000, 100],
          [970, 90],
          [728, 90],
          [990, 90],
          [970, 50],
          [960, 90],
          [950, 90],
          [980, 90],
        ],
        'adfree_sz_games_github_io_anchor_top_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_1000x100_desktop_anchor_bottom',
        [
          [1000, 100],
          [970, 90],
          [728, 90],
          [990, 90],
          [970, 50],
          [960, 90],
          [950, 90],
          [980, 90],
        ],
        'adfree_sz_games_github_io_anchor_bottom_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_160x600_desktop_side_left',
        [
          [160, 600],
          [120, 600],
        ],
        'adfree_sz_games_github_io_sidebar_left_desktop'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/adfree-sz-games.github.io_160x600_desktop_side_right',
        [
          [160, 600],
          [120, 600],
        ],
        'adfree_sz_games_github_io_sidebar_right_desktop'
      )
      .addService(googletag.pubads())
  }
  var interstitialSlot = googletag.defineOutOfPageSlot(
    '/147246189,22921845643/adfree-sz-games.github.io_interstitial',
    googletag.enums.OutOfPageFormat.INTERSTITIAL
  )
  if (interstitialSlot) interstitialSlot.addService(googletag.pubads())

  googletag.pubads().enableSingleRequest()
  googletag.pubads().disableInitialLoad()
  googletag.pubads().collapseEmptyDivs()
  googletag.enableServices()
  googletag.display(interstitialSlot)
})
