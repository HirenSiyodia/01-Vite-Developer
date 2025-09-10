import React from "react";
import ProjectCard from "./ProjectCard";


const Project = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-28 bg-muted">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
              Featured Projects.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check Out Some Of My Network Web Development Projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-y-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-10">
            <ProjectCard
              imageUrl="https://miro.medium.com/v2/resize:fit:1080/1*xgOYjkcRIadcXA9vrJFiUQ.jpeg"
              title='Project-1'
              description='Modern web application built with React, Node.js and MongoDB'
            />

            <ProjectCard
              imageUrl="https://miro.medium.com/v2/resize:fit:1080/1*xgOYjkcRIadcXA9vrJFiUQ.jpeg"
              title='Project-1'
              description='Modern web application built with React, Node.js and MongoDB'
            />

            <ProjectCard
              imageUrl="https://miro.medium.com/v2/resize:fit:1080/1*xgOYjkcRIadcXA9vrJFiUQ.jpeg"
              title='Project-1'
              description='Modern web application built with React, Node.js and MongoDB'
              />
        </div>
      </div>
    </section>
  );
};

export default Project;
