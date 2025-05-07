"use client";

import Copy from "@/components/Copy";
import { ReactLenis, useLenis } from "lenis/react";
import ImgBlur from "@/components/BlurImg";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <>
      {/* Lenis scroll wrapper */}
      <ReactLenis root>
        {/* === NAVIGATION === */}
        <nav>
          <div className="col">
            <div className="sub-col">
              {/* Site name or logo with blur effect */}
              <BlurText>
                <span>Greyloom</span>
              </BlurText>
            </div>
            <div className="sub-col">
              {/* Navigation links with BlurText wrapper */}
              <BlurText>
                <span>Home</span>
                <span>Projects</span>
                <span>About</span>
                <span>Lab</span>
              </BlurText>
            </div>
          </div>
          <div className="col">
            {/* Call to action link */}
            <BlurText>
              <span>Lets Talk</span>
            </BlurText>
          </div>
        </nav>

        {/* === HERO SECTION === */}
        <section className="hero">
          <div className="hero-img">
            {/* Background hero image with blur shader */}
            <ImgBlur src="hero.jpg" alt="" />
          </div>
          <div className="header">
            <Copy delay={0.5}>
              <h1>We craft identities and experiences for the bold.</h1>
            </Copy>
          </div>
        </section>

        {/* === ABOUT SECTION === */}
        <section className="about">
          <Copy>
            <span>Design & Strategy for the Vision-Driven</span>
          </Copy>
          <div className="header">
            <Copy>
              <h1>
                We partner with founders, innovators, and change-makers to shape
                brands that resonate. From first lines of code to global
                launches, we bring focus, elegance and intent to every stage.
              </h1>
            </Copy>
          </div>
        </section>

        {/* === ABOUT IMAGE SECTION === */}
        <section className="about-img">
          <ImgBlur src="/about.jpg" alt="" />
        </section>

        {/* === STORY SECTION === */}
        <section className="story">
          <div className="col">
            <Copy>
              <h1>
                The Story Behind <br /> Our Stillness
              </h1>
            </Copy>
          </div>
          <div className="col">
            {/* Repeating story paragraphs */}
            <Copy>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem a officiis aut necessitatibus explicabo sapiente
                deserunt ad id aspernatur veritatis, unde perferendis modi
                officia fugiat laudantium exercitationem architecto obcaecati
                alias animi laborum? Architecto, vitae.
              </p>
            </Copy>
            <Copy>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem a officiis aut necessitatibus explicabo sapiente
                deserunt ad id aspernatur veritatis, unde perferendis modi
                officia fugiat laudantium exercitationem architecto obcaecati
                alias animi laborum? Architecto, vitae.
              </p>
            </Copy>
            <Copy>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem a officiis aut necessitatibus explicabo sapiente
                deserunt ad id aspernatur veritatis, unde perferendis modi
                officia fugiat laudantium exercitationem architecto obcaecati
                alias animi laborum? Architecto, vitae.
              </p>
            </Copy>
          </div>
        </section>

        {/* === PHILOSOPHY SECTION === */}
        <section className="philosophy">
          <Copy>
            <span>The Thought Beneath</span>
          </Copy>
          <div className="header">
            <Copy>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus aut debitis earum! Fugiat eveniet iure doloribus rem,
                nisi unde impedit non modi nesciunt reiciendis dicta illo animi
                incidunt adipisci
              </h1>
            </Copy>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer>
          <div className="col">
            <div className="sub-col">
              <span>Terms & Conditions</span>
            </div>
            <div className="sub-col">
              <Copy>
                <h1>Twitter</h1>
                <h1>LinkedIn</h1>
                <h1>Instagram</h1>
                <h1>Awwwards</h1>
                <h1>Email</h1>
              </Copy>
            </div>
          </div>
          <div className="col">
            <span>Copyright Greyloom 2025</span>
          </div>
        </footer>
      </ReactLenis>
    </>
  );
}
