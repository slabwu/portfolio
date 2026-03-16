import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { PivotControls } from "@react-three/drei"
import * as THREE from "three"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

export default function Model() {
    const body = useRef()
    const mesh = useRef()
    const model = useLoader(GLTFLoader, "./ramp.glb")

    return <>
        <PivotControls
            onDrag={(l, deltaL, w, deltaW) => {
                const pos = new THREE.Vector3()
                const quat = new THREE.Quaternion()
                const scale = new THREE.Vector3()
                w.decompose(pos, quat, scale)
        
                body.current.setNextKinematicTranslation(pos)
                body.current.setNextKinematicRotation(quat)
            }}
        >
            <primitive object={ model.scene } scale={ 30 } />
        </PivotControls>

        <RigidBody ref={ body } type="kinematicPosition" colliders="trimesh">
            <primitive object={ model.scene } scale={ 30 } />
        </RigidBody>
    </>
}


