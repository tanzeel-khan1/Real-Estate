"use client";
import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef<number>(0);
  const mouseY = useRef<number>(0);
  const dotX = useRef<number>(0);
  const dotY = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      dotX.current += (mouseX.current - dotX.current) * 0.18;
      dotY.current += (mouseY.current - dotY.current) * 0.18;

      dot.style.transform = `translate(${dotX.current}px, ${dotY.current}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "14px",
          height: "14px",
          background: "black",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
}
