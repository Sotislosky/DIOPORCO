# AR Menu Example

This demo shows how to anchor virtual dishes in a web-based AR experience using a QR code as the origin point. When the code is scanned for the first time, the selected dishes appear at that location and further QR scanning stops.

## Usage

1. Generate a pattern file from your QR code using the [AR.js pattern generator](https://ar-js-org.github.io/AR.js-Docs/marker-training/). Save the file as `qr-marker.patt` in this directory.
2. Open `index.html` in a compatible mobile browser that supports WebXR and camera access.
3. Select one or more dishes and press **Start AR**.
4. Point the camera at the printed QR code. When detected, the virtual dishes will appear anchored at that spot and remain there even if you move the device.
