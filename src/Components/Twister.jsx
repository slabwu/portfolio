import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Twister() {
    const twister = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime

        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion().setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        const angle = time * 0.5
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2
        twister.current.setNextKinematicTranslation({ x, y: -0.8, z })
    })

    return <RigidBody
        ref={ twister }
        position={ [ 0, -0.8, 0 ] }
        friction={ 0 }
        type="kinematicPosition"
    >
        <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
            <boxGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    </RigidBody>
}