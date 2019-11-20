function injectJsFile(file_name) {
	let script = document.createElement('script');
	script.src = chrome.extension.getURL(`js/${file_name}`);
	document.documentElement.appendChild(script);
}

injectJsFile('inject.js');
