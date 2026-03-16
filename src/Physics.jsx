import Twister from "./Components/Twister.jsx"
import Border from "./Components/Border.jsx"
import Marbles from "./Components/Marbles.jsx"
import Draggable from "./Components/Draggable.jsx"
import Material from "./Components/Material.jsx"
import Object from "./Components/Object.jsx"
import Text from "./Components/Text.jsx"

export default function PhysicsObject() {
    return <>
            <Text position={ [ -1.2, 2, 2 ] }>Testing!</Text>

            <Object collider="ball" hollowSize={ 2 }>
                <sphereGeometry />
                <Material type="transparent" />
            </Object>

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

            <Twister />
            <Border />
            <Marbles />
    </>
}