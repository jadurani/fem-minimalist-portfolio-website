"use client";

import { Button } from "@components/Button/Button";

export default function Home() {
  return (
    <main>
      <section>
        {/*  */}

        <article className="py-8 border-t-2 border-b-2 solid border-tuna/5">
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
      {/* <section>Interested</section> */}
    </main>
  );
}
