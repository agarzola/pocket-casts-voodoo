// Inject styles overriding dislpay:hidden
var styleTag = document.createElement('style')
var styleText = document.createTextNode('.episode_button.ng-hide,.episode_time.ng-hide{display:block !important;}')
styleTag.type = 'text/css'
styleTag.appendChild(styleText)
document.body.appendChild(styleTag)

// Play/pause toggle behavior
var playPauseToggle = function () {
  var audioPlayerWrapper = document.getElementById('audio_player_wrapper')
  var playPauseButton = audioPlayerWrapper.getElementsByClassName('play_pause_button')[0]
  var clickEvent = new MouseEvent('click')
  playPauseButton.dispatchEvent(clickEvent)
}

// Listen for messages from document.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == 'play_pause_toggle') {
    playPauseToggle()
  }
})
