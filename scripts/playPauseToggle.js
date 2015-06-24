// Play/pause toggle behavior
var playPauseToggle = function () {
  var audioPlayerWrapper = document.getElementById('audio_player_wrapper')
  var playPauseButton = audioPlayerWrapper.getElementsByClassName('play_pause_button')[0]
  var clickEvent = new MouseEvent('click')
  playPauseButton.dispatchEvent(clickEvent)
}
