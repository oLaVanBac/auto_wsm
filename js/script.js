const injectJsFile = file_name => {
  let script = document.createElement('script')
  script.src = chrome.extension.getURL(`js/${file_name}`)
  document.documentElement.appendChild(script)
}

const injectCssFile = file_name => {
  let link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = chrome.extension.getURL(`css/${file_name}`)
  link.media = 'all'
  document.head.appendChild(link)
}

injectCssFile('main.css')
injectJsFile('inject.js')
