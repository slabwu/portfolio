import { PivotControls } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from "three"

export default function Draggable({ position = [ 0, 0, 0 ], rotation = [ 0, 0, 0 ], collider = "cuboid", children }) {
    const body = useRef()
    const eulerRotation = new THREE.Euler(...rotation)

    return <>
        <PivotControls
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 2 }
            rotation={ eulerRotation }
            onDrag={(l, deltaL, w, deltaW) => {
                const pos = new THREE.Vector3()
                const quat = new THREE.Quaternion()
                const scale = new THREE.Vector3()
                w.decompose(pos, quat, scale)
        
                body.current.setNextKinematicTranslation(pos)
                body.current.setNextKinematicRotation(quat)
            }}
        >
            <mesh position={ position } rotation={ eulerRotation }>
                { children }
                <meshStandardMaterial transparent opacity={0}/>
            </mesh>
        </PivotControls>
        
        <RigidBody ref={ body } type="kinematicPosition" colliders={ collider }>
            <mesh position={ position } rotation={ eulerRotation }>
                { children }
            </mesh>
        </RigidBody>
    </>
}