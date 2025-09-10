import React from "react";
import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-6 lg:py-2">
        <div className="container px-4 md:px-9">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-[#ff3e00] text-5xl truncate font-bold tracking-tighter py-2">
      <Typewriter
        words={['Hey, I am Hiren Siyodia 👋', 'Front End Developer', 'HTML, CSS, JavaScript, React.js', 'Deliver seamless user experiences']}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  "Creative and detail-oriented Front-End Engineer with a
                  passion for building responsive, user-friendly web interfaces
                  using React, HTML, CSS, and JavaScript. Focused on clean code,
                  performance, and great user experience."
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="default" size="default">
                  View Projects
                </Button>
                <Button variant="outline" size="default">
                  Contact Me
                </Button>
              </div>
            </div>
            <img
              src="https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-of-character-website-developer-png-image_13029763.png"
              width="300"
              height="300"
              alt="Hero"
              className="mx-auto aspect-auto overflow-hidden object-cover sm:w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
