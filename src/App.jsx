import { Routes ,Route} from 'react-router-dom';
import './App.css';
import CubeConatainer from "./components/Cube/CubeConatainer";
import XrCubeConatainer from './components/xr-cube/xrCubeConatainer';
import XrHitModelConatainer from './components/xr-hit-model/XrHitModelConatainer';


function App() {
  return (
<Routes>
<Route path="/" element={<XrHitModelConatainer />}/>
<Route path="/cube" element={<CubeConatainer />}/>
<Route path="/xr-cube" element={<XrCubeConatainer />}/>
{/* <Route path="/xr-hit-cube" element={<XrHitCubeConatainer />}/> */}
<Route path="/xr-hit-model" element={<XrHitModelConatainer />}/>
</Routes>

  )
}

export default App
