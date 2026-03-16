import Environment from './Environment.jsx'
import Twister from "./Twister.jsx"
import Border from "./Border.jsx"
import Marbles from "./Marbles.jsx"
import Draggable from "./Draggable.jsx"
import Material from "./Material.jsx"
import Model from "./Model.jsx"
import Text from "./Text.jsx"
import Physics from './Physics.jsx'

export default function App() {
    return <>
        <Environment>
            <Text position={ [ 0, 10, 0 ] }>Hi!</Text>
            <Physics />
        </Environment>
    </>
}