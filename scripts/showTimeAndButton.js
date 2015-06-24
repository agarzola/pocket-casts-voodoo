// Inject styles overriding dislpay:hidden
var styleOverrides = '.episode_button.ng-hide,.episode_time.ng-hide{display:block !important;}'
var styleTag = document.createElement('style')
var styleText = document.createTextNode(styleOverrides)
styleTag.type = 'text/css'
styleTag.appendChild(styleText)
document.body.appendChild(styleTag)
