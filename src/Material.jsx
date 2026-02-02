export default function Material({ type = "greenyellow" }) {
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
        default:
            return <meshStandardMaterial color={ type } />
    } 
}