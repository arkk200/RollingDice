import { Box } from "@react-three/drei";
import { DoubleSide } from "three";

const Floor = () => {
  return (
    <Box args={[10, 0.1, 10]}>
      <meshStandardMaterial color="hotpink" side={DoubleSide} />
    </Box>
  );
};

export default Floor;
