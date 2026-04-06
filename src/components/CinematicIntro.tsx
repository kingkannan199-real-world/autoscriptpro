// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { motion as motion3d } from "framer-motion-3d";
import { motion, AnimatePresence } from "framer-motion";

// --- THE PHOTOREALISTIC MACBOOK ENGINE ---
function AppleMacBook({ sequenceState }: { sequenceState: string }) {
  const group = useRef();
  
  // FIXED: Pointing directly to the glTF file inside the folder so it finds the textures
  const { nodes, materials } = useGLTF('/macbook_pro_13_inch_2020/scene.gltf') as any;

  // 1. CHASSIS PHYSICS (Boomerang throw & massive zoom)
  // 1. CHASSIS PHYSICS (Boomerang throw & massive zoom)
  const laptopVariants = {
    throwing: { x: 0, y: 5, z: -10, rotateX: 1, rotateY: 2, rotateZ: 0.5, scale: 0.8 },
    
    // INCREASED SCALE FROM 1 TO 1.4
    landed: { x: 0, y: -0.5, z: 0, rotateX: 0.15, rotateY: 0, rotateZ: 0, scale: 1.4, transition: { type: "spring", mass: 1, damping: 15, stiffness: 80 } },
    
    // INCREASED SCALE FROM 1 TO 1.4
    opening: { x: 0, y: -0.5, z: 0, rotateX: 0.15, rotateY: 0, rotateZ: 0, scale: 1.4 },
    
    zooming: { 
      x: 0, 
      y: -1.5, 
      z: 8,    
      rotateX: -0.05, 
      rotateY: 0, 
      rotateZ: 0, 
      // BUMPED FROM 50 TO 65 so the zoom still perfectly swallows the camera
      scale: 35, 
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  };

  // 2. HINGE PHYSICS (The Clamshell Snap)
  const lidVariants = {
    closed: { rotateX: 0 },
    // Opens exactly 110 degrees backward
    opening: { rotateX: -1.9, transition: { type: "spring", bounce: 0.3, duration: 1 } },
    zooming: { rotateX: -1.9, transition: { duration: 1.2 } }
  };

  return (
    <motion3d.group ref={group} variants={laptopVariants} initial="throwing" animate={sequenceState} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          
          {/* ========================================== */}
          {/* THE LID & SCREEN (Hinged at [0, 0.008, -0.104]) */}
          {/* ========================================== */}
          <motion3d.group 
            position={[0, 0.008, -0.104]} 
            variants={lidVariants} 
            initial="closed" 
            animate={sequenceState}
          >
            {/* The Bezel, Camera, and Casing */}
            <group scale={0.275}>
              <mesh geometry={nodes.Object_4.geometry} material={materials.Black_Glass} />
              <mesh geometry={nodes.Object_5.geometry} material={materials.Black_Plastic} />
              <mesh geometry={nodes.Object_6.geometry} material={materials.Glass} />
              <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
              <mesh geometry={nodes.Object_8.geometry} material={materials.Space_Grey} />
              <mesh geometry={nodes.Object_9.geometry} material={materials['Space_Grey.001']} />
              
              {/* Camera Light */}
              <group position={[0, 0.001, 0]} rotation={[-Math.PI, 0, 0]} scale={[-0.039, 0.039, 0.039]}>
                <group position={[0, 0.077, -0.044]} rotation={[-1.192, 0, 0]} scale={[-25.381, 25.381, 25.381]}>
                  <mesh geometry={nodes.Object_12.geometry} material={materials.Camera_Light} />
                </group>
              </group>
              
              {/* THE TRANSITION GLOW: Z-Fighting Fix Applied */}
              <mesh position={[0, 0.015, -0.5]}>
                <planeGeometry args={[1.1, 0.75]} />
                <meshBasicMaterial 
                  color="#ffffff" 
                  transparent 
                  opacity={sequenceState === "zooming" ? 1 : 0} 
                  depthWrite={false} 
                />
              </mesh>
            </group>

            {/* The Apple Logo / Outer Lid */}
            <group rotation={[1.949, 0, 0]} scale={0.275}>
              <mesh geometry={nodes.Object_16.geometry} material={materials['Material.001']} />
            </group>
          </motion3d.group>


          {/* ========================================== */}
          {/* THE BASE, KEYBOARD, & TOUCHBAR (Stationary) */}
          {/* ========================================== */}
          <group position={[0, -0.014, 0]} scale={0.275}>
            {/* Main Body */}
            <mesh geometry={nodes.Object_18.geometry} material={materials.Space_Grey} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.Black_Plastic} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Black_Plastic} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Keys.001']} />
            
            {/* Touchbar */}
            <mesh geometry={nodes.Object_23.geometry} material={materials.Black_Plastic} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Black_Glass} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Keys} />
            <mesh geometry={nodes.Object_27.geometry} material={materials['Touch_Bar_Shot_2021-04-02_at_18.13.28']} />
            
            {/* Keyboard */}
            <mesh geometry={nodes.Object_29.geometry} material={materials.Black_Plastic} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.Keys} />
            
            {/* Base Casing */}
            <mesh geometry={nodes.Object_32.geometry} material={materials.Black_Plastic} />
          </group>
          <group position={[0.203, 0.008, -0.104]} rotation={[0.011, -0.75, 1.274]} />

        </group>
      </group>
    </motion3d.group>
  );
}

// FIXED: Pre-load the exact same path
useGLTF.preload('/macbook_pro_13_inch_2020/scene.gltf');

// --- THE CINEMATIC DIRECTOR ---
export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [sequenceState, setSequenceState] = useState("throwing");

  useEffect(() => {
    // T=100ms: Trigger the landing spring animation
    const landTimer = setTimeout(() => setSequenceState("landed"), 100);
    
    // T=1500ms: Snap the realistic lid open
    const openTimer = setTimeout(() => setSequenceState("opening"), 1500);
    
    // T=2800ms: Dive the camera perfectly into the white glowing screen
    const zoomTimer = setTimeout(() => setSequenceState("zooming"), 2800);
    
    // T=3900ms: Remove 3D canvas and drop user onto the AutoScriptPro homepage
    const completeTimer = setTimeout(() => onComplete(), 3900);

    return () => {
      clearTimeout(landTimer);
      clearTimeout(openTimer);
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[5000] bg-slate-50 flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }} 
      >
        {/* CAMERA CLIPPING FIX APPLIED HERE: near={0.001} */}
        <Canvas camera={{ position: [0, 1.5, 4.5], fov: 45, near: 0.001 }}>
          <Environment preset="city" />
          <ambientLight intensity={1.5} />
          <spotLight position={[5, 10, 5]} intensity={2} penumbra={1} castShadow />
          
          <AppleMacBook sequenceState={sequenceState} />
          
          <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#0f172a" />
        </Canvas>
      </motion.div>
    </AnimatePresence>
  );
}