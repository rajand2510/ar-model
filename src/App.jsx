import { Routes ,Route} from 'react-router-dom';
import './App.css';
import CubeConatainer from "./components/Cube/CubeConatainer";
import XrCubeConatainer from './components/xr-cube/xrCubeConatainer';
import XrHitModelConatainer from './components/xr-hit-model/XrHitModelConatainer';
//import ProductList from './components/xr-hit-model/ProductList';
import Products from './components/product/Products';


function App() {
  return (
<Routes>
<Route path="/" element={<Products />} />
<Route path="/cube" element={<CubeConatainer />}/>
<Route path="/xr-cube" element={<XrCubeConatainer />}/>
<Route path="/xr-hit-cube" element={<XrCubeConatainer />}/>
<Route path="/xr" element={<XrHitModelConatainer />}/>
</Routes>

  )
}

export default App
