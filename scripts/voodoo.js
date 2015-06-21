var styleTag = document.createElement('style')
var styleText = document.createTextNode('.episode_button.ng-hide,.episode_time.ng-hide{display:block !important;}')
styleTag.type = 'text/css'
styleTag.appendChild(styleText)
document.body.appendChild(styleTag)

var playPauseToggle = function () {
  var audioPlayerWrapper = document.getElementById('audio_player_wrapper')
  var playPauseButton = audioPlayerWrapper.getElementsByClassName('play_pause_button')[0]
  var clickEvent = new MouseEvent('click')
  playPauseButton.dispatchEvent(clickEvent)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == 'play_pause_toggle') {
    playPauseToggle()
  }
})
