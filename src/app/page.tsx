"use client";

import devImage from "@assets/images/home/home-dev-image.jpg";
import { Button } from "@components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-16 justify-center items-center">
        <div className="w-[320px] h-[320px] sm:w-full sm:h-[520px] relative">
          <Image
            src={devImage}
            fill
            alt="developer image"
            className="object-cover object-right"
          />
        </div>

        <article className="w-full py-8 border-t-2 border-b-2 solid border-tuna/5">
          <header className="font-heading font-bold text-h2 md:text-h1">
            About Me
          </header>

          <p className="text-tuna/60 py-4">
            I&#39;m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I&#39;m based in London, UK, but I&#39;m happy working
            remotely and have experience in remote teams. When I&#39;m not
            coding, you&#39;ll find me outdoors. I love being out in nature
            whether that&#39;s going for a walk, run or cycling. I&#39;d love
            you to check out my work.
          </p>

          <Button label="Go to Portfolio" handleClick={() => {}}></Button>
        </article>
      </section>

      <section className="my-8 py-8 container mx-auto">
        <div className="flex flex-col gap-8 sm:flex-row md:justify-between">
          <p className="text-center sm:w-full sm:text-left font-heading text-h2 font-bold leading-none md:text-h1">
            Interested in doing a project together?
          </p>

          <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
            <Button label="Contact Me" handleClick={() => {}}></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
