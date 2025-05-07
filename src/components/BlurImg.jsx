"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin for scroll-based animation
gsap.registerPlugin(ScrollTrigger);

export default function ImgBlur({ src, alt = "", className = "" }) {
  const imgRef = useRef(null); // Ref to target the image DOM element

  useEffect(() => {
    // Animate blur + opacity when the image scrolls into view
    gsap.fromTo(
      imgRef.current,
      {
        filter: "blur(12px)", // Initial blur effect
        opacity: 0.1, // Start nearly invisible
      },
      {
        filter: "none", // End with no blur
        opacity: 1, // Fully visible
        duration: 4.0, // Long fade for a dreamy feel
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%", // Trigger when element hits 80% viewport height
          toggleActions: "play none none none", // Animate once
        },
      }
    );
  }, []); // Run only once after mount

  return <img ref={imgRef} src={src} alt={alt} className={className} />; // Render image
}
