chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "generateQR",
      title: "Generate QR Code",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "generateQR") {
      // Store the selected text in local storage
      chrome.storage.local.set({ selectedText: info.selectionText });
    }
  });
  
  