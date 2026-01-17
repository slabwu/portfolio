import { PivotControls } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from "three"

export default function Draggable({ children }) {
    const body = useRef()
    const mesh = useRef()

    return <>
        <PivotControls
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 2 }
            onDrag={(l, deltaL, w, deltaW) => {
                const pos = new THREE.Vector3()
                const quat = new THREE.Quaternion()
                const scale = new THREE.Vector3()
                w.decompose(pos, quat, scale)
        
                body.current.setNextKinematicTranslation(pos)
                body.current.setNextKinematicRotation(quat)
                mesh.current.position.set(pos.x, pos.y, pos.z);
                mesh.current.quaternion.set(quat.x, quat.y, quat.z, quat.w)
            }}
        >
            <RigidBody ref={ body } type="kinematicPosition">
                <mesh receiveShadow>
                    { children }
                    <meshStandardMaterial transparent opacity={0} />
                </mesh>
            </RigidBody>
        </PivotControls>
        
        <mesh ref={ mesh } receiveShadow>
            { children }
        </mesh>
    </>
}