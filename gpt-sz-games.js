window.googletag = window.googletag || {}
googletag.cmd = googletag.cmd || []

function giveReward() {
  googletag.pubads().removeEventListener('rewardedSlotClosed', dismissReward)
  loadGame()
}

function dismissReward(evt) {
  googletag.destroySlots([evt.rewardedSlot])
}

function showAd() {
  googletag.cmd.push(function () {
    var rewardedSlot = googletag.defineOutOfPageSlot(
      '/147246189,22921845643/sz.games_rewarded',
      googletag.enums.OutOfPageFormat.REWARDED
    )
    if (rewardedSlot) {
      rewardedSlot.addService(googletag.pubads())
    }
    googletag.pubads().addEventListener('rewardedSlotReady', function (evt) {
      evt.makeRewardedVisible()
    })
    googletag.pubads().addEventListener('rewardedSlotClosed', dismissReward)
    googletag.pubads().addEventListener('rewardedSlotGranted', function () {
      giveReward()
    })

    googletag.display(rewardedSlot)
    googletag.pubads().refresh([rewardedSlot])
  })
}

googletag.cmd.push(function () {
  if (window.innerWidth >= 1200) {
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_1000x100_desktop_anchor_top',
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
        'sz_games_anchor_top_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_1000x100_desktop_anchor_bottom',
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
        'sz_games_anchor_bottom_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_300x600_desktop_side_left',
        [
          [300, 600],
          [160, 600],
          [300, 250],
          [300, 300],
        ],
        'sz_games_sidebar_left_desktop'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_300x600_desktop_side_right',
        [
          [300, 600],
          [160, 600],
          [300, 250],
          [300, 300],
        ],
        'sz_games_sidebar_right_desktop'
      )
      .addService(googletag.pubads())
  } else if (window.innerWidth >= 1024) {
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_1000x100_desktop_anchor_top',
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
        'sz_games_anchor_top_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_1000x100_desktop_anchor_bottom',
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
        'sz_games_anchor_bottom_responsive'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_160x600_desktop_side_left',
        [
          [160, 600],
          [120, 600],
        ],
        'sz_games_sidebar_left_desktop'
      )
      .addService(googletag.pubads())
    googletag
      .defineSlot(
        '/147246189,22921845643/sz.games_160x600_desktop_side_right',
        [
          [160, 600],
          [120, 600],
        ],
        'sz_games_sidebar_right_desktop'
      )
      .addService(googletag.pubads())
  }
  var interstitialSlot = googletag.defineOutOfPageSlot(
    '/147246189,22921845643/sz.games_interstitial',
    googletag.enums.OutOfPageFormat.INTERSTITIAL
  )
  if (interstitialSlot) interstitialSlot.addService(googletag.pubads())

  googletag.pubads().enableSingleRequest()
  googletag.pubads().disableInitialLoad()
  googletag.pubads().collapseEmptyDivs()
  googletag.enableServices()
  googletag.display(interstitialSlot)
})

let script = document.createElement('script')
script.async = true
script.src = 'https://stpd.cloud/saas/9474'
document.head.appendChild(script)
console.log('gpt-sz-games.js loaded')
window.gptLoaded = true
// emit the event
document.dispatchEvent(new Event('gpt-loaded'))
