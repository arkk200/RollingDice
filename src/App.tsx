import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
// import { OrbitControls } from "@react-three/drei";
import Floor from "./Floor/Floor";
import Lights from "./Lights/Lights";
import Dice from "./Dice/Dice";
import useHandleDiceNumber from "./hooks/useHandleDiceNumber.hook";

function App() {
  const [dicePosition, setDicePosition] = useState<[number, number, number]>([
    0, 4, 0,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const diceRigidRef = useRef<RapierRigidBody>(null);

  const { handleDiceNumber } = useHandleDiceNumber(diceRigidRef);

  useEffect(() => {
    setRotation([Math.random() * 10, Math.random() * 10, Math.random() * 10]);
  }, []);

  const reRollDice = () => {
    setRotation([Math.random() * 10, Math.random() * 10, Math.random() * 10]);
    setDicePosition([0, 4 + Math.random(), 0]);
  };

  return (
    <div className="App">
      <Canvas camera={{ position: [0, 5, 7] }}>
        {/* <OrbitControls /> */}
        <Suspense>
          <Physics gravity={[0, -10, 0]} colliders={false}>
            <Lights />
            <RigidBody
              ref={diceRigidRef}
              colliders="cuboid"
              position={dicePosition}
              rotation={rotation}
              onSleep={handleDiceNumber}
              restitution={0.3}
            >
              <Dice onClick={reRollDice} />
            </RigidBody>

            <RigidBody
              colliders="cuboid"
              type="fixed"
              friction={10}
              position={[0, 0, 0]}
            >
              <Floor />
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
