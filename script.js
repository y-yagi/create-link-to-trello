chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "createLink") {
        createLink();
    }
});

function createLink() {
  document.getElementsByClassName('js-more-menu')[0].click();

  const title = document.getElementsByClassName('card-detail-title-assist')[0].textContent;
  const shortUrl = document.getElementsByClassName('js-short-url')[0].getAttribute("value");

  saveToClipboard(`[${title}](${shortUrl})`);
}

function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}
