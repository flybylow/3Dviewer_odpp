import { useState } from 'react'
import {
  ModelViewer,
  SurfaceAwareViewer,
  InteractiveARViewer,
} from '@cow-the-great/react-markerless-ar'
import './App.css'

type ViewMode = 'model' | 'surface' | 'interactive'

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('model')
  const [scale, setScale] = useState(1.5)
  const modelPath = '/models/Burgundy Velvet Dress_gltf_thin.gltf'

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>3D Dress Viewer</h1>
        <p>Burgundy Velvet Dress - AR Experience</p>
      </header>

      <nav className="viewer-tabs">
        <button
          className={viewMode === 'model' ? 'active' : ''}
          onClick={() => setViewMode('model')}
        >
          Model Viewer
        </button>
        <button
          className={viewMode === 'surface' ? 'active' : ''}
          onClick={() => setViewMode('surface')}
        >
          Surface AR
        </button>
        <button
          className={viewMode === 'interactive' ? 'active' : ''}
          onClick={() => setViewMode('interactive')}
        >
          Interactive AR
        </button>
      </nav>

      <div className="scale-controls">
        <label htmlFor="scale-slider">
          Model Scale: {scale.toFixed(2)}x
        </label>
        <input
          id="scale-slider"
          type="range"
          min="0.01"
          max="5"
          step="0.01"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
        />
        <div className="scale-presets">
          <button onClick={() => setScale(0.01)}>Micro (0.01x)</button>
          <button onClick={() => setScale(0.1)}>Tiny (0.1x)</button>
          <button onClick={() => setScale(0.5)}>Small (0.5x)</button>
          <button onClick={() => setScale(1.0)}>Original (1x)</button>
          <button onClick={() => setScale(1.5)}>Default (1.5x)</button>
        </div>
      </div>

      <div className="viewer-container">
        {viewMode === 'model' && (
          <div className="viewer-wrapper">
            <ModelViewer
              modelPath={modelPath}
              width="100%"
              height="100%"
              cameraProps={{
                position: [0, 1, 3],
                fov: 50,
              }}
              lightingProps={{
                ambientLightIntensity: 0.8,
                directionalLightPosition: [5, 5, 5],
                directionalLightIntensity: 1.2,
              }}
              modelProps={{
                scale: scale,
                position: [0, -1, 0],
              }}
              controlsProps={{
                enableZoom: true,
                zoomSpeed: 1.0,
                enablePan: true,
                enableRotate: true,
              }}
              backgroundProps={{
                enableCamera: false,
                backgroundColor: '#1a1a1a',
              }}
            />
            <div className="viewer-info">
              <p>Use mouse to rotate, zoom, and pan the model</p>
            </div>
          </div>
        )}

        {viewMode === 'surface' && (
          <div className="viewer-wrapper">
            <SurfaceAwareViewer
              modelPath={modelPath}
              width="100%"
              height="100%"
              cameraProps={{
                position: [0, 1, 3],
                fov: 60,
              }}
              lightingProps={{
                ambientLightIntensity: 0.9,
                directionalLightPosition: [5, 5, 5],
                directionalLightIntensity: 1.0,
              }}
              modelProps={{
                scale: scale,
                position: [0, 0, 0],
              }}
              controlsProps={{
                enableZoom: true,
                enablePan: true,
              }}
              backgroundProps={{
                enableCamera: true,
                planeSize: 30,
              }}
            />
            <div className="viewer-info">
              <p>Surface-aware AR with camera background</p>
            </div>
          </div>
        )}

        {viewMode === 'interactive' && (
          <div className="viewer-wrapper">
            <InteractiveARViewer
              modelPath={modelPath}
              width="100%"
              height="100%"
              cameraProps={{
                position: [0, 2, 5],
                fov: 60,
              }}
              lightingProps={{
                ambientLightIntensity: 0.9,
                directionalLightPosition: [5, 5, 5],
                directionalLightIntensity: 1.0,
              }}
              modelProps={{
                scale: scale,
              }}
              controlsProps={{
                enableZoom: true,
                enablePan: true,
              }}
              backgroundProps={{
                enableCamera: true,
                planeSize: 30,
              }}
              floorProps={{
                size: 50,
                opacity: 0.3,
              }}
              placementProps={{
                distance: 3,
              }}
            />
            <div className="viewer-info">
              <p>Click to place the dress model in the AR space</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
