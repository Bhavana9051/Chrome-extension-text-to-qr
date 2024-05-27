chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateQR") {
      let selectedText = request.text;
      console.log("Selected text:", selectedText); // Debugging line
      chrome.storage.local.set({ selectedText: selectedText }, () => {
        chrome.runtime.sendMessage({ action: "openPopup" });
      });
    }
  });
  
  