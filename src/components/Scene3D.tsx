// @ts-nocheck
"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <color attach="background" args={["transparent"]} />
        <Stars radius={80} depth={40} count={1500} factor={3} />
      </Canvas>
    </div>
  );
}
