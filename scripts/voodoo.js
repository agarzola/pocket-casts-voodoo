var styleTag = document.createElement('style')
var styleText = document.createTextNode('.episode_button.ng-hide,.episode_time.ng-hide{display:block !important;}')
styleTag.type = 'text/css'
styleTag.appendChild(styleText)
document.body.appendChild(styleTag)
