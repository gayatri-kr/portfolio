// @ts-nocheck
"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Section3DBg() {
  return (
    <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <color attach="background" args={["transparent"]} />
        <Stars radius={60} depth={30} count={800} factor={2} />
      </Canvas>
    </div>
  );
}
