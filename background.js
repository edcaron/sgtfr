chrome.browserAction.onClicked.addListener(function (tab) {

	//get current url
	var tabUrl = tab.url;

	//get the proxy link stored
  	chrome.storage.sync.get({
    	link: '',
  	}, function(items) {

      if(items.link != ""){
    		//create a new url
      	var myNewUrl = items.link + tabUrl;

    		//Update the current url to the proxyed url
    		chrome.tabs.update(tab.id, {url: myNewUrl});
      }else{
          alert("You have to set the proxy server first. Go to the preferences page and fill the form");
      }

  	});

});

openWithProxy = function(param){
    var query = param.linkUrl;
	  //get the proxy link stored
  	chrome.storage.sync.get({
    	link: '',
  	}, function(items) {

        if(items.link != ""){

    		  //create a new url
      		var myNewUrl = items.link + query;

      		//create a new tab with the proxyed url
      		chrome.tabs.create({url: myNewUrl});

        }else{
           alert("You have to set the proxy server first. Go to the preferences page and fill the form");
        }

  	});

};

chrome.contextMenus.create({
 title: "Proxy it for me!",
 contexts:["link"],  // ContextType
 onclick: openWithProxy // A callback function
});

