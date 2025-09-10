import React from "react";
import TalentCard from "./TalentCard";

const Talent = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#ff3e00]">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of Technologies I'm proficient in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-y-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-5 mt-10">
          <TalentCard
            ImageUrl="https://tse3.mm.bing.net/th/id/OIP.tHYR-6oYpduV1jPgI4QPVgHaHa?pid=Api&P=0&h=220"
            Title="React JS"
          />

          <TalentCard
            ImageUrl="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
            Title="JavaScript"
          />

          <TalentCard
            ImageUrl="https://tse1.mm.bing.net/th/id/OIP.c35sZJtMQ178BexqabknQgAAAA?pid=Api&P=0&h=220"
            Title="MongoDB"
          />

          <TalentCard
            ImageUrl="https://logospng.org/download/tailwind-css/tailwind-css-1024.png"
            Title="Tailwind CSS"
          />

          <TalentCard
            ImageUrl="https://www.nicepng.com/png/full/274-2741839_jquery-jquery-logo-transparent-background.png"
            Title="Jquery"
          />
        </div>
      </div>
    </section>
  );
};

export default Talent;
