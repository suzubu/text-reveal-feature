"use client";

import Copy from "@/components/Copy";
import { ReactLenis, useLenis } from "lenis/react";
import ImgBlur from "@/components/Img_Blur";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <nav>
          <div className="col">
            <div className="sub-col">
              <BlurText>
                <span>Greyloom</span>
              </BlurText>
            </div>
            <div className="sub-col">
              <BlurText>
                <span>Home</span>
                <span>Projects</span>
                <span>About</span>
                <span>Lab</span>
              </BlurText>
            </div>
          </div>
          <div className="col">
            <BlurText>
              <span>Lets Talk</span>
            </BlurText>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-img">
            <ImgBlur src="hero.jpg" alt="" />
          </div>
          <div className="header">
            <Copy delay={0.5}>
              <h1>We craft identities and experiences for the bold.</h1>
            </Copy>
          </div>
        </section>
        <section className="about">
          <Copy>
            {" "}
            <span>Design & Strategy for the Vision-Driven</span>
          </Copy>
          <div className="header">
            <Copy>
              {" "}
              <h1>
                We partner with founders, innovators, and change-makers to shape
                brands that resonate. From first lines of code to global
                launches, we bring focus, elegance and intent to every stage.
              </h1>
            </Copy>
          </div>
        </section>
        <section className="about-img">
          <ImgBlur src="/about.jpg" alt="" />
        </section>

        <section className="story">
          <div className="col">
            <Copy>
              <h1>
                The Story Behind <br /> Our Stillness
              </h1>
            </Copy>
          </div>
          <div className="col">
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
        <section className="philosophy">
          <Copy>
            {" "}
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
