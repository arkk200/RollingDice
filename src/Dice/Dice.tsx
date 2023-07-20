import OneDot from "@/assets/images/1.png";
import TwoDots from "@/assets/images/2.png";
import ThreeDots from "@/assets/images/3.png";
import FourDots from "@/assets/images/4.png";
import FiveDots from "@/assets/images/5.png";
import SixDots from "@/assets/images/6.png";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

interface PropTypes {
  onClick: () => void;
}

const Dice = ({ onClick }: PropTypes) => {
  const diceRef = useRef<any>(null);

  const dotTextures = useLoader(TextureLoader, [
    TwoDots,
    FiveDots,
    OneDot,
    SixDots,
    ThreeDots,
    FourDots,
  ]) as THREE.Texture[];

  // useHelper(diceRef, BoxHelper);

  return (
    <mesh ref={diceRef} onClick={onClick}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      {dotTextures.map((texture, index) => (
        <meshStandardMaterial attach={`material-${index}`} map={texture} />
      ))}
    </mesh>
  );
};

export default Dice;
