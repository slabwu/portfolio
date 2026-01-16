import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './style.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Canvas>
      <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
      </mesh>
    </Canvas>
  </StrictMode>
)
