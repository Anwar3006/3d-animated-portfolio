import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { PlayStationModel } from "./Playstation5";

const PlaystationModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="lobby" intensity={0.3}>
          <PlayStationModel />
        </Stage>

        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default PlaystationModelContainer;
