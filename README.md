# Physiognomy Profiling Machine

## What is it?

The **Physiognomy Profiling Machine** is a speculative biometric web prototype that uses a webcam to analyse a person's face and body, estimate physical characteristics, and turn them into personalised style recommendations.

It explores how technologies that measure people can move from **observation and classification to personalisation and influence**.

## How does it work?

```text
WEBCAM
   ↓
FACE + BODY DETECTION
   ↓
LANDMARKS & MEASUREMENTS
   ↓
CLASSIFICATION
   ↓
STYLE RECOMMENDATIONS
   ↓
BIOMETRIC STYLE PASSPORT
```

The system uses **MediaPipe, MoveNet, and Teachable Machine** to detect facial landmarks, body pose, face shape, and other visual features. Custom JavaScript logic then uses these results to estimate height, classify body features, and generate style and clothing recommendations.

## Why was it created?

The project was created to explore the relationship between **biometrics, AI, personalisation, and human choice**.

It reimagines historical physical measurement systems as a future-facing AI machine that does more than measure a person — it begins to suggest **what suits them and how they should present themselves**.

> **Measure → Classify → Profile → Recommend → Influence**

## Technologies

* MediaPipe Face Landmarker
* MediaPipe Pose Landmarker
* MoveNet
* Teachable Machine
* TensorFlow.js
* JavaScript
* HTML / CSS

## Status

**Functional speculative prototype**
