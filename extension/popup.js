const processResponse = (response) => {
  const addSpan = document.getElementById('add');
  const subSpan = document.getElementById('sub');

  addSpan.innerText = "+" + response.added;
  subSpan.innerText = response.removed;
}

chrome.tabs.getSelected(null, function(tab) {
  // Send a request to the content script.
  chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
    processResponse(response)
  });
});
