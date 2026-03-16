import { RigidBody } from "@react-three/rapier"
import * as THREE from "three"

export default function Object({ position = [ 0, 0, 0 ], rotation = [ 0, 0, 0 ], collider = "cuboid", children }) {
    const eulerRotation = new THREE.Euler(...rotation)

    return <RigidBody type="fixed" colliders={ collider }>
            <mesh position={ position } rotation={ eulerRotation }>
                { children }
            </mesh>
        </RigidBody>
}