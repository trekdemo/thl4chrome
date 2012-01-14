function sendToTHL(tabID, title, url, selection) {
  var index = 1, //event.message['index'],
      title = encodeURIComponent('Look at "' + title + '"'),
      url   = encodeURIComponent(url),
      notes = selection;

  var link = 'thehitlist:///inbox/tasks?method=POST&index=' + inboxPosition() + '&title=' + title + '&url=' + url;

  if (notes.length > 0) link += '&notes=' + encodeURIComponent(notes);
  if (startDate() !== '') link += '&startDate=' + encodeURIComponent(startDate().toString());
  console.log(link);

  chrome.tabs.update( tabID, {'url': link});
}

function inboxPosition() {
  return localStorage['inbox_position'] || '0.0';
}

function startDate() {
  console.log( localStorage['start_date'] );
  return localStorage['start_date'] || '';
}

// This will get called by the content script we execute in
// the tab as a result of the user pressing the browser action.
chrome.extension.onConnect.addListener( function(port) {
  var tab = port.sender.tab;
  port.onMessage.addListener(function(info) {
    var max_length = 1024;
    if (info.selection.length > max_length)
      info.selection = info.selection.substring(0, max_length);
    sendToTHL(tab.id, info.title, tab.url, info.selection);
  });
});

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
  // We can only inject scripts to find the title on pages loaded with http
  // and https so for all other pages, we don't ask for the title.
  if (tab.url.indexOf("http:") != 0 &&
      tab.url.indexOf("https:") != 0) {
    sendToTHL(tab.id, tab.title, tab.url, "");
  } else {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  }
});
