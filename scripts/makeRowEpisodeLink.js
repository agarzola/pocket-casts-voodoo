// Make episode link occupy entire row
var styleOverrides = '.episode_title {position:absolute;top:0;left:0;right:0;bottom:0;margin:0 !important;height:auto !important;z-index:1;}.episode_title a{position:absolute;top:0;left:0;right:54px;bottom:0;margin:0 !important;padding:4px 198px 0 66px;overflow:hidden;}.episode_button,#content_right{z-index:2}'
var styleTag = document.createElement('style')
var styleText = document.createTextNode(styleOverrides)
styleTag.type = 'text/css'
styleTag.appendChild(styleText)
document.body.appendChild(styleTag)
