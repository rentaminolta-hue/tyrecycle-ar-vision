# Tirecycle AR Vision AI Knowledge Base

## Model
The supplied `best-3.onnx` model has two classes: `tire_car` and `tire_truck`.

## Detection and counting
The PWA runs ONNX Runtime Web in the browser, draws bounding boxes, tracks detections across frames, and counts tracked tyres crossing the configured counting line.

## Recycling
Topics include sorting, shredding, steel/fibre separation, granulation, crumb rubber, TDF (Tyre Derived Fuel), and TDA (Tyre Derived Aggregate).

## Important limitation
Do not claim the current model detects OTR, agricultural, motorcycle, industrial, or other tyre categories unless the model is retrained with those classes.

## Updating
Edit `knowledge.json` to add or change knowledge. Keep `index.html`, `best-3.onnx`, `manifest.json`, and `sw.js` in the GitHub Pages root.
