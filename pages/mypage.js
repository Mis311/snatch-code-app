//useFrame allows to render based on certain movement
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// need to extract mesh into its own component using useFrame
// to avoid multiple call backs/ loop
const SphereMesh = () => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry
        attach="geometry"
        args={[1, 50, 50]}
        position={[1, 1, 1]}
      />
      <meshStandardMaterial attach="material" color="purle" />
    </mesh>
  );
};
function Sphere() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        {/* ambientLight doesnt cast shaddows */}
        <ambientLight intensity={0.3} />
        <SphereMesh />
      </Canvas>
    </>
  );
}
export default function MyPage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <Sphere />
    </div>
  );
}
