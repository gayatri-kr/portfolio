// @ts-nocheck
"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { usePerformantContext } from "@/contexts/PerformantContext";

function Planets({ reducedMotion }: { reducedMotion: boolean }) {
  const speed = reducedMotion ? 0 : 1;
  return (
    <>
      <Float speed={speed * 0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh position={[3, 1.5, -3]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.7} />
        </mesh>
      </Float>
      <Float speed={speed * 0.6} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh position={[-2.5, -1.2, -2]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial color="#c4b5fd" transparent opacity={0.65} />
        </mesh>
      </Float>
      <Float speed={speed * 0.5} rotationIntensity={0.08} floatIntensity={0.2}>
        <mesh position={[1.5, -2, -4]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshBasicMaterial color="#e9d5ff" transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={speed * 0.7} rotationIntensity={0.12} floatIntensity={0.35}>
        <mesh position={[-1, 2.2, -2.5]}>
          <sphereGeometry args={[0.2, 24, 24]} />
          <meshBasicMaterial color="#93c5fd" transparent opacity={0.65} />
        </mesh>
      </Float>
    </>
  );
}

function GlowOrbs({ reducedMotion }: { reducedMotion: boolean }) {
  const refs = [useRef<any>(), useRef<any>(), useRef<any>()];
  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    refs.forEach((ref, i) => {
      if (ref.current?.material) {
        ref.current.material.opacity = 0.28 + Math.sin(t * 0.4 + i) * 0.08;
      }
    });
  });
  const orbs = [
    { pos: [2.5, 1.5, -2] as [number, number, number], color: "#7c3aed", size: 0.9 },
    { pos: [-2, -1.5, -1.5] as [number, number, number], color: "#e59cff", size: 0.65 },
    { pos: [0, -2, -2.5] as [number, number, number], color: "#60a5fa", size: 0.55 },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <mesh key={i} ref={refs[i]} position={o.pos}>
          <sphereGeometry args={[o.size, 32, 32]} />
          <meshBasicMaterial color={o.color} transparent opacity={0.35} />
        </mesh>
      ))}
    </>
  );
}

function Rings({ reducedMotion }: { reducedMotion: boolean }) {
  const refs = [useRef<any>(), useRef<any>(), useRef<any>(), useRef<any>()];
  useFrame((_, delta) => {
    if (reducedMotion) return;
    refs.forEach((ref, i) => {
      if (ref.current) ref.current.rotation.y += delta * (0.06 + i * 0.02);
    });
  });
  const rings = [
    { r: 2.2, t: 0.02, color: "#8b5cf6", rot: 0, op: 0.55 },
    { r: 2.8, t: 0.015, color: "#a78bfa", rot: Math.PI / 4, op: 0.45 },
    { r: 1.6, t: 0.018, color: "#e59cff", rot: Math.PI / 2, op: 0.4 },
    { r: 3.2, t: 0.01, color: "#60a5fa", rot: Math.PI / 6, op: 0.35 },
  ];
  return (
    <>
      {rings.map((ring, i) => (
        <mesh key={i} ref={refs[i]} rotation={[Math.PI / 2, 0, ring.rot]}>
          <torusGeometry args={[ring.r, ring.t, 24, 80]} />
          <meshBasicMaterial color={ring.color} transparent opacity={ring.op} />
        </mesh>
      ))}
    </>
  );
}

function StarDust({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const ref = useRef<any>();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#e9d5ff"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ParallaxCamera({ enabled }: { enabled: boolean }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      const y = -(e.clientY / window.innerHeight - 0.5) * 0.4;
      target.current = { x, y };
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, [enabled]);

  useFrame(() => {
    if (!enabled) return;
    current.current.x += (target.current.x - current.current.x) * 0.025;
    current.current.y += (target.current.y - current.current.y) * 0.025;
    camera.position.x = current.current.x * 2;
    camera.position.y = current.current.y * 2;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });

  return null;
}

export default function Hero3D() {
  const { reducedMotion, isMobile, dpr } = usePerformantContext();
  const starCount = reducedMotion ? 800 : isMobile ? 1500 : 5000;
  const dustCount = reducedMotion ? 0 : isMobile ? 150 : 500;

  return (
    <div className="fixed inset-0 z-0 w-full h-full min-h-screen">
      <Canvas
        dpr={Math.min(dpr, 2)}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: false, antialias: true }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <color attach="background" args={["#0d0d24"]} />
        <Stars radius={150} depth={80} count={starCount} factor={5} saturation={0.8} fade speed={1} />
        <GlowOrbs reducedMotion={reducedMotion} />
        <Planets reducedMotion={reducedMotion} />
        <Rings reducedMotion={reducedMotion} />
        {dustCount > 0 && <StarDust count={dustCount} reducedMotion={reducedMotion} />}
        <ParallaxCamera enabled={!reducedMotion && !isMobile} />
      </Canvas>
    </div>
  );
}
