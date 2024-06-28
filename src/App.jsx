import { Routes ,Route} from 'react-router-dom';
import './App.css';
import CubeConatainer from "./components/Cube/CubeConatainer";
import XrCubeConatainer from './components/xr-cube/xrCubeConatainer';
import XrHitCubeConatainer from './components/xr-hit-cube/XrHitCubeConatainer';
function App() {
  return (
<Routes>
<Route path="/" element={<XrHitCubeConatainer />}/>
<Route path="/cube" element={<CubeConatainer />}/>
<Route path="/xr-cube" element={<XrCubeConatainer />}/>
<Route path="/xr-hit-cube" element={<XrHitCubeConatainer />}/>
</Routes>

  )
}

export default App
