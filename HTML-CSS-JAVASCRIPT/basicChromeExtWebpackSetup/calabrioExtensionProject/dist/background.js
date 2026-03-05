/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.action === "openNewTab") {
			chrome.tabs.create({
				url: request.url,
				active: request.active
			});

			sendResponse({status: "Tab created" });
		}
	}
);
/******/ })()
;
//# sourceMappingURL=background.js.map