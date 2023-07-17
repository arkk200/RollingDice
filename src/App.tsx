import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import "./App.css";

function Box(props: MeshProps) {
  const ref = useRef<THREE.Mesh>(null);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_, delta) => {
    ref.current!.rotation.x += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
