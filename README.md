# AR Menu Example

This demo shows how to anchor virtual dishes in a web-based AR experience.
By default the dishes appear around the world origin `(0,0,0)` when you start the experience. Optionally you can scan a QR code to move the origin to that location. Once the QR code is detected the origin is fixed and further scanning is disabled.

## Usage

1. (Optional) Generate a pattern file from your QR code using the [AR.js pattern generator](https://ar-js-org.github.io/AR.js-Docs/marker-training/). Save the file as `qr-marker.patt` in this directory if you want to reposition the origin via QR code.
2. Open `index.html` in a compatible mobile browser that supports WebXR and camera access.
3. Select one or more dishes and press **Start AR**. The dishes will appear at the world origin.
4. (Optional) Point the camera at the printed QR code to move the origin and lock it in place.
