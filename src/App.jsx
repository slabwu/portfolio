import { Environment, ScrollControls, Scroll } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import Content from "./Content.jsx"
import PhysicsObject from "./Physics.jsx"

export default function App() {
    return <>
        <Perf position="top-left" />

        <Environment preset="studio" />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <ScrollControls pages={3} damping={0.2}>
            <Scroll>
                <Physics debug>
                    <PhysicsObject />
                </Physics>
            </Scroll>
            <Scroll html>
                <Content />
            </Scroll>
        </ScrollControls>
    </>
}