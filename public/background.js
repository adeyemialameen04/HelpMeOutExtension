// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("http")) {
//     const queryParameters = tab.url.split(":");
//     const urlParams = new URLSearchParams(queryParameters);
//     const date = new Date().getTime();

//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       videoId: `${urlParams.get(":")}_${date}`,
//     });
//   }
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./content.js"],
      })
      .then(() => {
        console.log("we have injected the content script");
      })
      .catch((err) => console.log(err, "error in background script line 10"));
  }
});
