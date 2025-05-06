"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImgBlur({ src, alt = "", className = "" }) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        filter: "blur(12px)",
        opacity: 0.1,
      },
      {
        filter: "none",
        opacity: 1,
        duration: 4.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return <img ref={imgRef} src={src} alt={alt} className={className} />;
}
