import {Canvas} from "@react-three/fiber"
import  Cylinder from "../Components/Cylinder.jsx";
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing"

const ReactFibre = () => {

    return(
        <Canvas flat camera={{fov: 35}}>
            
            <ambientLight /> 
            <Cylinder />
            <EffectComposer>
            <Bloom 
            mipmapBlur
            intensity={10.0}
            luminanceThreshold={0.}
            luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
             </EffectComposer>
        </Canvas>
    )
}

export default ReactFibre;