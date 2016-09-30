chrome.browserAction.onClicked.addListener(function (tab) {
	
	//get current url	
	var tabUrl = tab.url;
	
	//get the proxy link stored
  	chrome.storage.sync.get({
    	link: 'https://54.149.70.135/mp/index.php?',
  	}, function(items) {

  		//create a new url 
    	var myNewUrl = items.link + tabUrl;
	
		//Update the current url to the proxyed url
		chrome.tabs.update(tab.id, {url: myNewUrl});
  	});
  	
});