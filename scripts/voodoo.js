// Listen for messages from document.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == 'play_pause_toggle') {
    playPauseToggle()
  }
})
