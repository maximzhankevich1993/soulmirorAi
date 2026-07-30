"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { cameraTargets } from "./CameraTargets";

export function CameraRig() {
  const { camera } = useThree();

  const targetPosition = useRef(
    new THREE.Vector3(...cameraTargets.hero.position)
  );

  const targetLookAt = useRef(
    new THREE.Vector3(...cameraTargets.hero.lookAt)
  );

  useEffect(() => {
    function updateCamera() {
      const sections = [
        "hero",
        "features",
        "dreams",
        "journal",
        "pricing",
      ];

      const scroll = window.scrollY;
      const viewport = window.innerHeight;

      let active = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);

        if (!el) continue;

        if (scroll >= el.offsetTop - viewport * 0.35) {
          active = id;
        }
      }

      switch (active) {
        case "hero":
          targetPosition.current.set(
            ...cameraTargets.hero.position
          );
          targetLookAt.current.set(
            ...cameraTargets.hero.lookAt
          );
          break;

        case "features":
          targetPosition.current.set(
            ...cameraTargets.scan.position
          );
          targetLookAt.current.set(
            ...cameraTargets.scan.lookAt
          );
          break;

        case "dreams":
          targetPosition.current.set(
            ...cameraTargets.dreams.position
          );
          targetLookAt.current.set(
            ...cameraTargets.dreams.lookAt
          );
          break;

        case "journal":
          targetPosition.current.set(
            ...cameraTargets.journey.position
          );
          targetLookAt.current.set(
            ...cameraTargets.journey.lookAt
          );
          break;

        case "pricing":
          targetPosition.current.set(
            ...cameraTargets.premium.position
          );
          targetLookAt.current.set(
            ...cameraTargets.premium.lookAt
          );
          break;
      }
    }

    updateCamera();

    window.addEventListener("scroll", updateCamera);

    return () => {
      window.removeEventListener(
        "scroll",
        updateCamera
      );
    };
  }, []);

  useFrame((_, delta) => {
    camera.position.lerp(
      targetPosition.current,
      1 - Math.exp(-delta * 2.8)
    );

    const look = new THREE.Vector3();

    look.copy(targetLookAt.current);

    camera.lookAt(look);
  });

  return null;
}