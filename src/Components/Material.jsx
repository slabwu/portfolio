import { Color } from "three"

export default function Material({ type = "white" }) {
    switch (type) {
        case "glass":
            return <meshPhysicalMaterial
                color="#9ad7ff"
                transmission={1}     
                thickness={0.5}      
                roughness={0}         
                metalness={0}
                ior={1.45}            
                envMapIntensity={1.2}
            />
        case "transparent":
            return <meshStandardMaterial transparent opacity={0}/>
        default:
            let color
            try {
                color = new Color(type)
            } catch {
                console.warn(`Invalid color "${type}", defaulting to white`);
                color = new Color("white")
            }
            return <meshStandardMaterial color={ color } />
    } 
}