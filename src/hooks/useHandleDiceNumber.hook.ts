import getCalculatedDiceNumber from "@/utils/getCalculatedDiceNumber.hook";
import { RapierRigidBody, euler, quat } from "@react-three/rapier";
import { RefObject, useState } from "react";

const useHandleDiceNumber = (diceRigidRef: RefObject<RapierRigidBody>) => {
  const [diceNumber] = useState<null | number>(null);

  const handleDiceNumber = () => {
    const angle = euler().setFromQuaternion(
      quat(diceRigidRef.current?.rotation())
    );

    const number = getCalculatedDiceNumber(angle.x, angle.y, angle.z);
    console.log(number);
  };

  return { diceNumber, handleDiceNumber };
};

export default useHandleDiceNumber;
