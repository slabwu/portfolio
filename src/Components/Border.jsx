import { RigidBody, CuboidCollider } from "@react-three/rapier"

export default function Border() {
    return <RigidBody type="fixed">
        <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, 5.5 ] } />
        <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, -5.5 ] } />
        <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ 5.5, 1, 0 ] } />
        <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ -5.5, 1, 0 ] } />
    </RigidBody>
}