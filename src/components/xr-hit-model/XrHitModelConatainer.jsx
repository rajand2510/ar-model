import { Canvas } from "@react-three/fiber"
import XeHitModel from "./XeHitModel"
import { ARButton, XR } from "@react-three/xr"


const XrHitModelConatainer = () => {
  return (
    <>
    <ARButton sessionInit={{
      requiredFeatures:["hit-test"]
    }}/>
    <Canvas>
       <XR>
       <XeHitModel/>
       </XR>
    </Canvas>
    </>
   
  )
}

export default XrHitModelConatainer