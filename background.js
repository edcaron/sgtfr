chrome.browserAction.onClicked.addListener(function (tab) {
	
	//get current url	
	var tabUrl = tab.url;
	
	//get the proxy link stored
  	chrome.storage.sync.get({
    	link: '',
  	}, function(items) {

  		//create a new url 
    		var myNewUrl = items.link + tabUrl;
	
		//Update the current url to the proxyed url
		chrome.tabs.update(tab.id, {url: myNewUrl});
  	});
  	
});

openWithProxy = function(word){
    	var query = word.linkUrl;
	//get the proxy link stored
  	chrome.storage.sync.get({
    	link: '',
  	}, function(items) {

  		//create a new url 
    		var myNewUrl = items.link + query;
	
		//create a new tab with the proxyed url
		chrome.tabs.create({url: myNewUrl});
  	});

};

chrome.contextMenus.create({
 title: "Proxy it for me!",
 contexts:["link"],  // ContextType
 onclick: openWithProxy // A callback function
});

