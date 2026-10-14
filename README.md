# 🏛️ The Hologram — 3D Product Viewer

An interactive 3D product viewing experience built with **Three.js, JavaScript, HTML, CSS, and Vite**. Explore a luxury mansion model in a browser-based 3D environment with interactive camera controls and a responsive interface.

## 🌐 Live Demo

🔗 **Live Website:** https://wd-10-hologram3dviewer-byte.netlify.app/

📂 **GitHub Repository:** https://github.com/bhurgriumema-portfolio/WD_10_Hologram3DViewer_byte

## ✨ Features

- **Interactive 3D Viewer:** Explore a luxury mansion model directly in the browser.
- **3D Model Loading:** Load the `.glb` model using Three.js `GLTFLoader`.
- **Orbit Controls:** Rotate and inspect the model from different angles.
- **Zoom Controls:** Zoom in and out to explore architectural details.
- **Camera Presets:** Switch between predefined camera views.
- **Auto-Rotation:** Enable or disable automatic model rotation.
- **Reset View:** Return to the default camera position.
- **Responsive Design:** Adapt the viewer interface to different screen sizes.
- **Lighting and Environment:** Ambient and directional lighting enhance the 3D scene.
- **Loading Feedback:** Display model-loading progress and error feedback.
- **Fullscreen Viewing:** Expand the viewer for a more immersive experience.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, layout, and responsive design |
| JavaScript (ES Modules) | Application logic and interactions |
| Three.js | 3D rendering and scene management |
| GLTFLoader | Loading the 3D model |
| OrbitControls | Interactive camera rotation and zoom |
| Vite | Development server and production build |
| WebGL | Browser-based 3D rendering |

## 🎮 How to Use

1. Open the [Live Demo](https://wd-10-hologram3dviewer-byte.netlify.app/).
2. Wait for the 3D mansion model to load.
3. Drag with your mouse to rotate the view.
4. Use the scroll wheel or viewer controls to zoom.
5. Try the camera presets to explore different views.
6. Use the auto-rotation control to toggle automatic rotation.
7. Reset the camera whenever you want to return to the default view.
8. Try fullscreen mode for a larger viewing experience.

*Touch gestures and available controls may vary by device.*

## 💻 Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/bhurgriumema-portfolio/WD_10_Hologram3DViewer_byte.git
```

**2. Navigate to the project folder**

```bash
cd WD_10_Hologram3DViewer_byte
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### Production Build

To create a production build:

```bash
npm run build
```

Vite generates the production files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
WD_10_Hologram3DViewer_byte/
├── public/
│   └── luxury_mansion.glb
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🏗️ 3D Model Attribution

The project uses a luxury mansion 3D model sourced from Sketchfab.

- **Model:** Luxury Mansion
- **Creator:** Home Design 3D (as identified in the project source)
- **Source:** https://sketchfab.com/3d-models/luxury-mansion-62df7ade8d73479599f08acfd3310f0b
- **Model file:** `public/luxury_mansion.glb`
- **License:** CC Attribution-NonCommercial-ShareAlike (CC BY-NC-SA), as identified in the project source.

The model is credited to its original creator. Please review the original Sketchfab listing and its license terms before redistributing, modifying, or using the model. Non-commercial and ShareAlike conditions may apply.

## 🎯 Project Objective

This project was developed as part of **AVIP 2026 — Web Development Internship, Task 10: The Hologram**.

The objective is to create a browser-based 3D viewer that demonstrates 3D model loading, camera interaction, scene lighting, and responsive interface design using Three.js.

## 👩‍💻 Developer

**Umema Bhurgri**

GitHub: https://github.com/bhurgriumema-portfolio

---

⭐ If you find this project interesting, feel free to explore the live demo and source code.
