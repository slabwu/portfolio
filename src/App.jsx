import Environment from './Environment.jsx'
import Twister from "./Twister.jsx"
import Border from "./Border.jsx"
import Marbles from "./Marbles.jsx"
import Draggable from "./Draggable.jsx"

export default function App() {
    return <>
        <Environment>
            <Draggable>
                <boxGeometry args={ [ 10, 0.5, 10 ] } />
                <meshStandardMaterial color="greenyellow" />
            </Draggable>

            <Twister />
            <Border />
            <Marbles />
        </Environment>
    </>
}