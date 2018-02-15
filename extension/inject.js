chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM") {
   const addedSpans = Array.from(document.getElementsByClassName('lines-added'))
   const removedSpans = Array.from(document.getElementsByClassName('lines-removed'))

   const addedLines = addedSpans.map((span) => { return parseInt(span.innerText, 10) }).reduce((a, c) => (a + c), 0)
   const removedLines = removedSpans.map((span) => { return parseInt(span.innerText, 10) }).reduce((a, c) => (a + c), 0)

   console.log(addedLines)
   console.log(removedLines)
   sendResponse({
     added: addedLines,
     removed: removedLines
   });
 }
 else
   sendResponse({}); // Send nothing..
});
