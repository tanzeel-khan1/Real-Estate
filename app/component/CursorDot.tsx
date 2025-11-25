// "use client";
// import { useEffect, useRef } from "react";

// export default function CursorDot() {
//   const dotRef = useRef<HTMLDivElement | null>(null);
//   const mouseX = useRef<number>(0);
//   const mouseY = useRef<number>(0);
//   const dotX = useRef<number>(0);
//   const dotY = useRef<number>(0);

//   useEffect(() => {
//     const dot = dotRef.current;
//     if (!dot) return;

//     const handleMove = (e: MouseEvent) => {
//       mouseX.current = e.clientX;
//       mouseY.current = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMove);

//     const animate = () => {
//       dotX.current += (mouseX.current - dotX.current) * 0.18;
//       dotY.current += (mouseY.current - dotY.current) * 0.18;

//       dot.style.transform = `translate(${dotX.current}px, ${dotY.current}px) translate(-50%, -50%)`;

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`body { cursor: none; }`}</style>

//       <div
//         ref={dotRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "14px",
//           height: "14px",
//           background: "black",
//           borderRadius: "50%",
//           pointerEvents: "none",
//           zIndex: 9999,
//           transform: "translate(-50%, -50%)",
//         }}
//       ></div>
//     </>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const [showDot, setShowDot] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);

  useEffect(() => {
    // STEP 1: Only enable if screen width is big (desktop)
    if (window.innerWidth < 768) return;

    // STEP 2: First mousemove = desktop device confirmed
    const detectMouse = () => {
      setShowDot(true);
      window.removeEventListener("mousemove", detectMouse);
    };

    window.addEventListener("mousemove", detectMouse);
  }, []);

  useEffect(() => {
    if (!showDot) return;

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

    return () => window.removeEventListener("mousemove", handleMove);
  }, [showDot]);

  if (!showDot) return null;

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
        }}
      ></div>
    </>
  );
}
