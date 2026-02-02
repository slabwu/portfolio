import { OrbitControls, Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"

export default function Configuration({ children }) {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Environment preset="studio" />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Physics>
            { children }
        </Physics>
    </>
}