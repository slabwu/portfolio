import Environment from './Environment.jsx'
import Text from "./Components/Text.jsx"
import Physics from './Physics.jsx'

export default function App() {
    return <>
        <Environment>
            <Text position={ [ 0, -10, 0 ] }>Hi!</Text>
            <Physics />
        </Environment>
    </>
}