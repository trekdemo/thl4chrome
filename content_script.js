// Send back the information about the tab
var additionalInfo = {
  "title": document.title,
  "selection": window.getSelection().toString(),
  "location": window.location
};

chrome.extension.connect().postMessage(additionalInfo);
