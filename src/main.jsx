import './style.css'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './X.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <Canvas camera={{ position: [ 0, 3, 12 ], fov: 45 }}>
    <App />
  </Canvas>
)
