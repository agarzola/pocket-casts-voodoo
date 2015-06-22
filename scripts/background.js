// Listen for play/pause media key presses
chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ url: '*://play.pocketcasts.com/*' }, function (tabs) {
    // Send message to contentscript
    chrome.tabs.sendMessage(tabs[0].id, { command: command })
  })
})
