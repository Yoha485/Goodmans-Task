import React from "react";
import { AppState } from "../../../types";
import useStore from "../../store";
import { ImageCubeContainer } from "./styles";

import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import defaultTexture from "../../../assets/images/map.jpg";

export const ImageCube: React.FC = () => {
  const selectedFile = useStore((state: AppState) => state.selectedFile);

  const Cube = () => {
    const img = selectedFile ? selectedFile.url : defaultTexture;

    const texture = useLoader(THREE.TextureLoader, img);

    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]}></boxBufferGeometry>
        {/* @ts-ignore */}
        <meshLambertMaterial attach="material" map={texture}></meshLambertMaterial>
      </mesh>
    );
  };

  return (
    <ImageCubeContainer>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 20, 15]} angle={0.3} />
        <Cube />
      </Canvas>
    </ImageCubeContainer>
  );
};
