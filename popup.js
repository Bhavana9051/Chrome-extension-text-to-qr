document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['selectedText'], (result) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
  
      let selectedText = result.selectedText || '';
      if (selectedText) {
        let qrCodeContainer = document.getElementById('qrcode');
        qrCodeContainer.innerHTML = ''; // Clear any existing QR code
        new QRCode(qrCodeContainer, {
          text: selectedText,
          width: 128,
          height: 128
        });
  
        document.getElementById('download').addEventListener('click', () => {
          let qrImage = qrCodeContainer.querySelector('img');
          if (qrImage) {
            let qrCodeURL = qrImage.src;
            let a = document.createElement('a');
            a.href = qrCodeURL;
            a.download = 'qrcode.png';
            a.click();
          } else {
            console.error("QR code image not found");
          }
        });
      } else {
        console.log("No selected text found.");
      }
    });
  });
  
  