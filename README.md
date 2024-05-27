# Chrome-extension-text-to-qr
This is an Chrome browser based extension created by me using Javascript, HTML and QRCodejs library which when selected a text in any website generates a QRCode of it.

## Installation

1. Clone the repository:
   ```sh
   https://github.com/Bhavana9051/Chrome-extension-text-to-qr.git

2. Load the extension in Chrome:
   1. Open chrome://extensions/.
   2. Enable "Developer mode".
   3. Click "Load unpacked" and select the cloned directory.

## Usage
1. Select text on any webpage.
2. Right-click and choose "Generate QR Code".
3. Then click on the Pinned 'T-icon' Extension which will display the QR code and provide an option to download it.

## Files
1. **manifest.json:** Extension manifest file.
2. **background.js:** Background script to handle context menu.
3. **content.js:** Content script to handle selected text.
4. **popup.html:** Popup HTML file.
5. **popup.js:** Popup script to generate and download QR code.
6. **qrcode.min.js:** QR code library.

