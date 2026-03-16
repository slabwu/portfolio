import { OrbitControls, Environment, ScrollControls, Scroll } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"

export default function Configuration({ children }) {
    return <>
        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <Environment preset="studio" />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <ScrollControls pages={3} damping={0.2}>
            <Scroll>
                <Physics debug>
                    {children}
                </Physics>
            </Scroll>
            <Scroll html>
                <h1>Hello!</h1>
            </Scroll>
        </ScrollControls>
    </>
}