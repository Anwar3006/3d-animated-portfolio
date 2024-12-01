import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { SculptureModel } from "./SculptureModel";

const SculptureModelContainer = () => {
  return (
    <Canvas className="">
      <Suspense fallback="Loading...">
        <Stage environment="lobby" intensity={0.3}>
          <SculptureModel />
        </Stage>

        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={1.1} />
      </Suspense>
    </Canvas>
  );
};

export default SculptureModelContainer;
