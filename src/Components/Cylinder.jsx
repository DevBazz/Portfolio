import {useTexture} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import * as THREE from "three";
import { useRef} from "react"

const Cylinder = () => {

let texture  = useTexture("/images/texture.png")
let cyl = useRef(null)
useFrame((state, delta) =>{
    cyl.current.rotation.y += delta
})

    return(
        <group rotation={[0, 1.4, .5]}>
          <mesh ref={cyl} rotation={[0, 2, .3]}>
            <cylinderGeometry args={[1.4, 1.4, 1.4, 60, 60, true]}/>
            <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide}/>
         </mesh>
         </group>
    )
}

export default Cylinder;