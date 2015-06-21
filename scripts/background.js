chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ url: '*://play.pocketcasts.com/*' }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: command })
  })
})
