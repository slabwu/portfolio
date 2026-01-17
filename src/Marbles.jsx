import { InstancedRigidBodies } from "@react-three/rapier"
import { useMemo } from "react"

export default function Marbles() {
    const count = 100
    const random = () => Math.random() - 0.5
    
    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < count; i++) {
            instances.push({
                key: 'instance_' + i,
                position: [ 
                    random() * 8, 
                    6 + i * 0.2, 
                    random() * 8
                ],
                rotation: [ 0, 0, 0 ]
            })
        }

        return instances
    }, [])

    return <InstancedRigidBodies instances={ instances } colliders="ball">
        <instancedMesh args={ [ null, null, count] }>
            <sphereGeometry args={ [ 0.4, 16, 16 ] } />
            {/* <meshPhysicalMaterial
                color="#9ad7ff"
                transmission={1}     
                thickness={0.5}      
                roughness={0}         
                metalness={0}
                ior={1.45}            
                envMapIntensity={1.2}
            /> */}
            <meshStandardMaterial color="red"/>
        </instancedMesh>
    </InstancedRigidBodies>
}