const url = "https://tsundo-ku.herokuapp.com/books/import"

function onClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, "createLink");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({title: "Create a link"});
