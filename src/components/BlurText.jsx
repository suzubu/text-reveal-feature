"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

export default function BlurText({ children, className = "" }) {
  const textRef = useRef(null); // Ref for the DOM element to animate

  useEffect(() => {
    // Animate the text when it scrolls into view
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0, // Start fully transparent
        scale: 1.05, // Slightly zoomed in
      },
      {
        opacity: 1, // Fade in
        scale: 1, // Scale to normal size
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Trigger animation when element enters view
          toggleActions: "play none none none", // Only play once
        },
      }
    );
  }, []); // Empty dependency array = runs once on mount

  return (
    <div ref={textRef} className={className}>
      {children} {/* Render children inside animated div */}
    </div>
  );
}
