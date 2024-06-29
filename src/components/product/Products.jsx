import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Product.css';

const Product = ({ title, price, gltfPath, initialScale, positionY }) => {
  const controlsRef = useRef();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(gltfPath, (gltf) => {
      const scene = gltf.scene;
      scene.scale.set(initialScale, initialScale, initialScale);
      scene.position.y = positionY; // Set position dynamically
      setModel(scene);
    });
  }, [gltfPath, initialScale, positionY]);

  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>${price}</p>
      <Canvas
        className="product-canvas"
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true }}
        style={{ background: 'linear-gradient(to bottom, #cfd9df, #e2ebf0)' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        {/* Controls */}
        <OrbitControls ref={controlsRef} />

        {/* Model */}
        {model && <primitive object={model} />}
      </Canvas>
    </div>
  );
};

const Products = () => {
  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <Product
        title="Indoor Plant"
        price="29.99"
        gltfPath="/models/indoor_plant/scene.gltf"
        initialScale={4}
        positionY={-2.5} // Example position adjustment
      />
      <Product
        title="Outdoor Chair"
        price="49.99"
        gltfPath="/models/outdoor_chair/scene.gltf"
        initialScale={2}
        positionY={-0.3} // Example position adjustment
      />
      <Product
        title="Smartphone"
        price="799.99"
        gltfPath="/models/smartphone/scene.gltf"
        initialScale={1}
        positionY={-0.2} // Example position adjustment
      />
    </div>
  );
};

export default Products;
