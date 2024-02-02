import ContactForm from "@components/ContactForm/ContactForm";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function ContactMePage() {
  return (
    <>
      <NavBar activeRoute={"/contact-us"}></NavBar>

      <main className="max-w-6xl container mx-auto">
        <section className="py-8 border-t-2 solid border-tuna/5 flex flex-col md:flex-row gap-4 md:gap-16">
          <h1 className="flex-grow md:w-2/5 text-h2 md:text-h1 font-heading font-bold">
            Get in Touch
          </h1>

          <article className="text-tuna/60 md:w-3/5">
            <p className="leading-loose">
              I&#39;d love to hear about what you&#39;re working on and how I
              could help. I&#39;m currently looking for a new role and am open
              to a wide range of opportunities. My preference would be to find a
              position in a company in London. But I&#39;m also happy to hear
              about opportunites that don&#39;t fit that description. I&#39;m a
              hard-working and positive person who will always approach each
              task with a sense of purpose and attention to detail. Please do
              feel free to check out my online profiles below and get in touch
              using the form.
            </p>
            <div className="flex items-center gap-4 py-8">
              <Link
                href={"https://github.com/jadurani"}
                target="_blank"
                aria-label="Visit my Github profile">
                <Image
                  alt="github"
                  src={"/icons/github.svg"}
                  width={24}
                  height={24}></Image>
              </Link>

              <Link
                href={"https://twitter.com/jadurani"}
                target="_blank"
                aria-label="Visit my Twitter profile">
                <Image
                  alt="twitter"
                  src={"/icons/twitter.svg"}
                  width={24}
                  height={24}></Image>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/jadurani/"}
                target="_blank"
                aria-label="Visit my LinkedIn profile">
                <Image
                  alt="linked in"
                  src={"/icons/linkedin.svg"}
                  width={24}
                  height={24}></Image>
              </Link>
            </div>
          </article>
        </section>

        <section className="py-8 border-t-2 solid border-tuna/5 flex flex-col md:flex-row gap-4 md:gap-16">
          <h1 className="flex-grow md:w-2/5 text-h2 md:text-h1 font-heading font-bold">
            Contact Me
          </h1>
          <div className="text-tuna/60 md:w-3/5">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
