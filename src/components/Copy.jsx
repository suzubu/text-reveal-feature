"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins for scroll animation and text splitting
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null); // Parent container for text animation
  const elementRef = useRef([]); // Stores original DOM elements
  const splitRef = useRef([]); // Stores split text instances
  const lines = useRef([]); // Flattened array of line elements

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset refs before splitting
      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements = [];

      // Detect children for multi-line splitting vs. single element
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      // Apply line splitting and collect all lines
      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "lines++", // Custom class for styling each line
        });

        splitRef.current.push(split);

        // Fix for text-indent styling if present on first line
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== 0) {
          if (split.lines.length > 0) {
            split.lines[0].style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0"; // Prevent double indentation
        }

        lines.current.push(...split.lines);
      });

      // Set initial position of lines offscreen
      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%", // Animate lines into view
        duration: 1,
        stagger: 0.1, // Sequential delay between lines
        ease: "power4.out",
        delay: delay, // Optional user-defined delay
      };

      // Trigger animation on scroll or immediately
      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      // Clean up split instances on unmount
      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef, // Limits effect to scoped ref
      dependencies: [animateOnScroll, delay], // Re-run if these change
    }
  );

  // Return cloned child if there's only one child element
  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  // Wrap multiple children in a container if needed
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
