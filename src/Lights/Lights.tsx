const Lights = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

export default Lights;
