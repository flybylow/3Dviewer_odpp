# 3D Dress Viewer - AR Experience

A modern web application for viewing 3D models in augmented reality using React and the React-Markerless-AR library. This project showcases a Burgundy Velvet Dress model with multiple viewing modes.

## Features

- **Model Viewer**: Interactive 3D model viewing with zoom, pan, and rotate controls
- **Surface-Aware AR**: Augmented reality view with camera background and surface detection
- **Interactive AR**: Click-to-place AR experience with floor plane visualization
- **Responsive Design**: Modern UI that works across desktop and mobile devices
- **Performance Optimized**: Efficient loading and rendering of 3D assets

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React-Markerless-AR** for AR capabilities
- **Three.js** for 3D rendering
- **@react-three/fiber** and **@react-three/drei** for React integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd /Users/warddem/dev/3Dviz
```

2. Install dependencies (already done):
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
3Dviz/
├── public/
│   └── models/                 # 3D model files
│       ├── Burgundy Velvet Dress_gltf_thin.gltf
│       ├── Burgundy Velvet Dress_gltf_thin.bin
│       └── *.png               # Texture files
├── src/
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## Usage

### Model Viewer Mode
- Use your mouse to interact with the 3D model
- **Left click + drag**: Rotate the model
- **Right click + drag**: Pan the view
- **Scroll wheel**: Zoom in/out

### Surface-Aware AR Mode
- Allows camera access for AR background
- Model is placed on a detected surface
- Use controls to adjust view

### Interactive AR Mode
- Allows camera access for AR background
- Click anywhere in the 3D space to place the model
- Model appears with floor plane visualization

## Model Information

The project includes a high-quality Burgundy Velvet Dress model with:
- PBR (Physically Based Rendering) materials
- Diffuse, normal, metallic-roughness, and displacement maps
- Optimized geometry for web viewing

## Configuration

You can customize the viewers by modifying the props in `src/App.tsx`:

### Camera Settings
```typescript
cameraProps={{
  position: [x, y, z],  // Camera position
  fov: 50,              // Field of view
}}
```

### Lighting
```typescript
lightingProps={{
  ambientLightIntensity: 0.8,           // Ambient light strength
  directionalLightPosition: [5, 5, 5],  // Direction of main light
  directionalLightIntensity: 1.2,       // Main light strength
}}
```

### Model Properties
```typescript
modelProps={{
  scale: 1.5,         // Model size
  position: [0, 0, 0], // Model position
}}
```

## Browser Requirements

- Modern browser with WebGL support
- For AR features: HTTPS connection and camera permissions
- Recommended: Chrome, Firefox, Safari (latest versions)

## Troubleshooting

### Model not loading
- Check that model files are in `/public/models/` directory
- Verify the model path in `App.tsx` is correct
- Check browser console for loading errors

### Camera not working (AR modes)
- Ensure HTTPS connection (or localhost for development)
- Grant camera permissions when prompted
- Check browser compatibility

### Performance issues
- Try reducing model scale
- Disable camera background in `backgroundProps`
- Close other browser tabs

## Adding More Models

To add additional 3D models:

1. Place your `.gltf` or `.glb` files (with textures) in `/public/models/`
2. Update the `modelPath` in `App.tsx`:
```typescript
const modelPath = '/models/your-model-name.gltf'
```

## License

This project uses the React-Markerless-AR library by CowTheGreat (MIT License).

## Credits

- **React-Markerless-AR**: [@cow-the-great/react-markerless-ar](https://github.com/CowTheGreat/React-Markerless-Ar)
- **Three.js**: [threejs.org](https://threejs.org/)
- **Model**: Burgundy Velvet Dress

## Support

For issues with the AR library, visit: [React-Markerless-AR GitHub](https://github.com/CowTheGreat/React-Markerless-Ar)

---

Built with ❤️ using React and Three.js
