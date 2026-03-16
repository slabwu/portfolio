import { InstancedRigidBodies } from "@react-three/rapier"
import { useMemo } from "react"
import Material from "./Material.jsx"

export default function Marbles() {
    const count = 500
    const random = () => Math.random() - 0.5
    
    const instances = useMemo(() => {
        const instances = []

        for (let i = 0; i < count; i++) {
            instances.push({
                key: 'instance_' + i,
                position: [ 
                    random() * 4, 
                    1 + i * 0.2, 
                    random() * 4
                ],
                rotation: [ 0, 0, 0 ]
            })
        }

        return instances
    }, [])

    return <InstancedRigidBodies instances={ instances } colliders="ball">
        <instancedMesh args={ [ undefined, undefined, count] } frustumCulled={false}>
            <sphereGeometry args={ [ 0.4, 16, 16 ] } />
            {/* <Material type="glass" /> */}
            <Material type="turquoise" />
        </instancedMesh>
    </InstancedRigidBodies>
}