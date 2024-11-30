import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Bg3DShape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.4} // Adds a subtle surface texture
          metalness={0.3} // Enhances light interaction
        />
      </Sphere>

      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 2]} intensity={2} color="#ffffff" />
    </>
  );
};

export default Bg3DShape;
