import { useEffect, useRef } from "react";
import NET from "../vanta/dist/vanta.waves.min.js";
import * as THREE from "three";

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        THREE: THREE, // Pass the THREE instance
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="h-screen w-full"></div>;
};

export default VantaBackground;
