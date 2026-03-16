import { Text, Center, Float } from "@react-three/drei"

export default function TextObject({ position = [ 0, 0, 0 ], children }) {
    return <Float position={ position }>
        <Center>
            <Text>
                { children }
            </Text>
        </Center>
    </Float>
}