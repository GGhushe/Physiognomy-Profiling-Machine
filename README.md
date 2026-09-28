
# Physiognomy Profiling Machine

A speculative biometric web prototype that explores how physical measurements can be transformed into **classification, personalisation, and recommendation**.

The project combines webcam-based face and body analysis with a rule-based style engine to create a **Biometric Style Passport** for the participant.

> **See → Measure → Classify → Recommend → Influence**

---

## Concept

The **Physiognomy Profiling Machine** imagines a future technology inspired by historical systems of physical measurement and classification.

Instead of manually measuring a person, the machine uses a webcam and machine-learning models to analyse visible physical characteristics. These measurements are then converted into classifications and personalised recommendations.

The project explores what happens when technology moves beyond **measuring a person** and begins to **suggest what suits them**.

---

## How It Works

```text
                 WEBCAM
                    │
                    ▼
        ┌─────────────────────┐
        │       BIO-SCAN      │
        │ Face + Iris + Shape │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │    HEIGHT QUEST     │
        │ Pose + Calibration  │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │    STYLE ENGINE     │
        │   Rule-based logic  │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │ BIOMETRIC STYLE     │
        │      PASSPORT       │
        └──────────┬──────────┘
                   │
                   ▼
          STYLE + LOOKBOOK
             + REWARDS
```

---

## Main Features

### Bio-Scan

The system analyses the participant's face through the webcam.

It can:

* Detect the face
* Extract facial landmarks
* Estimate facial proportions
* Classify face shape
* Sample iris colour
* Create a biometric profile

### Height Quest

The system estimates standing height using webcam-based pose estimation.

It uses:

* Pose landmarks
* Head/crown estimation
* Camera calibration
* Distance estimation
* Pinhole-camera geometry
* Temporal smoothing
* Median filtering
* Stability locking

The calibration system is designed to reduce the effect of the participant moving closer to or farther from the camera.

### Biometric Style Passport

The collected information is combined into a personalised profile containing:

* Face shape
* Iris colour
* Estimated height
* Body/torso shape
* Clothing size
* Fit recommendations
* Style recommendations
* Outfit references

The profile can then be used to generate a capsule wardrobe and outfit lookbook.

---

## Machine Learning

The project uses several ML/computer-vision technologies.

### ML / Computer Vision

| Technology                              | Purpose                          |
| --------------------------------------- | -------------------------------- |
| **MediaPipe Face Landmarker**           | Facial landmark detection        |
| **MediaPipe Face Detector / BlazeFace** | Face detection                   |
| **MediaPipe Pose Landmarker**           | Body pose estimation             |
| **MoveNet**                             | Pose estimation fallback         |
| **Teachable Machine**                   | Custom face-shape classification |

### Rule-Based Systems

Not every part of the prototype uses machine learning.

The following are currently generated through JavaScript logic, calculations, and lookup tables:

* Iris colour naming
* Body/torso classification
* Clothing recommendations
* Fit recommendations
* Style recommendations
* Capsule wardrobe generation
* XP and badges
* Reward calculations

This distinction is important: **the project combines actual ML models with custom rule-based logic.**

---

## Height Estimation Pipeline

```text
WEBCAM
   │
   ▼
POSE DETECTION
   │
   ├── Head / Crown
   ├── Nose
   ├── Ankles
   └── Body Keypoints
          │
          ▼
   CAMERA CALIBRATION
          │
          ▼
   DISTANCE ESTIMATION
          │
          ▼
   HEIGHT ESTIMATION
          │
          ▼
   TEMPORAL FILTERING
          │
          ▼
   STABLE HEIGHT
```

The height estimator is a **webcam-based estimation system**, not a professional measurement instrument.

---

## Input → Output

### Input

```text
Webcam video
Face landmarks
Body pose landmarks
Iris region
Camera calibration
User-selected body information
User interactions
```

### Output

```text
Face shape
Facial measurements
Iris category
Estimated height
Body / torso classification
Clothing size
Fit style
Style recommendations
Biometric Style Passport
Outfit lookbook
XP / badges
```

---

## Technology Stack

* HTML5
* CSS3
* JavaScript ES6+
* TensorFlow.js
* MediaPipe
* MoveNet
* Google Teachable Machine
* HTML5 Canvas
* Web APIs
* LocalStorage / SessionStorage

---

## Project Structure

```text
/
├── index.html
├── height-estimator.html
├── style_engine.js
├── README.md
└── assets/
```

### `index.html`

Main interactive profiling interface containing the Bio-Scan and Style Passport experience.

### `height-estimator.html`

Experimental height-estimation and camera-calibration interface.

### `style_engine.js`

Contains the rule-based profiling, style recommendation, sizing, and related logic.

---

## Limitations

The prototype has several technical limitations:

* Height estimation depends on camera calibration.
* Crown/head-top position is estimated rather than directly measured.
* Pose accuracy can vary with camera angle, lighting, and participant position.
* Body-shape classification is based on pose/measurement logic rather than a validated anthropometric dataset.
* Style recommendations are currently rule-based rather than generated by a trained recommendation model.
* Webcam-based measurements should not be treated as medically or professionally accurate.
* Some outputs may appear more precise than the underlying measurements justify.

These limitations are part of the investigation into how biometric systems can present uncertain measurements as personalised information.

---

## Conceptual Framework

The project explores a progression from physical measurement to personal influence:

```text
MEASURE
   ↓
CLASSIFY
   ↓
PROFILE
   ↓
RECOMMEND
   ↓
INFLUENCE
```

The machine begins by collecting seemingly objective physical information.

It then transforms that information into categories and recommendations, asking:

> **What happens when a machine stops simply measuring us and starts telling us what suits us?**

---

## Current Status

**Functional speculative prototype**

The current prototype demonstrates the complete journey:

**Webcam → Biometric Analysis → Height Estimation → Classification → Style Recommendations → Biometric Style Passport**

The project is a speculative design artefact exploring the relationship between **biometric technology, machine learning, personalisation, and human choice**.

