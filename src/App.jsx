import Environment from './Environment.jsx'
import Twister from "./Twister.jsx"
import Border from "./Border.jsx"
import Marbles from "./Marbles.jsx"
import Draggable from "./Draggable.jsx"
import Material from "./Material.jsx"
import Model from "./Model.jsx"
import Text from "./Text.jsx"

export default function App() {
    return <>
        <Environment>
            <Text position={ [ 0, 10, 0 ] }>Hi!</Text>

            <Draggable position={ [ 0, -1.25, 0 ] } rotation={ [ 0, 0, 0 ] }>
                <boxGeometry args={ [ 10, 0.5, 10 ] } />
                <Material />
            </Draggable>

            <Draggable position={ [ 0, 5, 0 ] } rotation={ [ 0.6, 0, 0 ] }>
                <boxGeometry args={ [ 2, 0.5, 8 ] } />
                <Material />
            </Draggable>

            <Draggable position={ [ 0, 2, 0 ] } rotation={ [ 1, 1, 0 ] } collider="ball">
                <sphereGeometry />
                <Material type="white" />
            </Draggable>

            {/* <Model /> */}
            {/* <RigidBody position={ [ -4, 2, 4 ] } colliders="trimesh" type="kinematicPosition">
                <Model />
            </RigidBody> */}

            {/* <Draggable position={ [ -4, 2, 4 ] } collider="trimesh ">
                <Model />
            </Draggable> */}

            <Twister />
            <Border />
            <Marbles />
        </Environment>
    </>
}