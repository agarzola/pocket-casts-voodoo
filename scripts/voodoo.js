var enablePlayButtonsAndTime = function () {
  var episodes = document.getElementsByClassName('episode_row')
  if (episodes.length > 0) {
    for (key in episodes) {
      if (episodes.hasOwnProperty(key) && key != 'length') {
        removeClass('ng-hide').from(episodes[key].getElementsByClassName('episode_button ng-hide')[0])
        removeClass('ng-hide').from(episodes[key].getElementsByClassName('episode_time ng-hide')[0])
      }
    }
  }
}

var removeClass = function (classNameToRemove) {
  return {
    regexToRemove: new RegExp('\\b' + classNameToRemove + '\\b', 'gi'),
    from: function (element) {
      element.className = element.className.replace(this.regexToRemove, '')
    }
  }
}

var consoleIt = function (value) {
  chrome.runtime.sendMessage({log: value});
}

window.onload = enablePlayButtonsAndTime
