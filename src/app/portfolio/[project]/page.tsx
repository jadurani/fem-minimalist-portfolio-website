"use client";

import { Button } from "@components/Button/Button";
import { NavBar } from "@components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const proj = {
  title: "Manage",
  description:
    "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  thumbnailName: "image-portfolio-manage.jpg",
  link: "manage",
  staticPhotos: {
    hero: "/images/detail/desktop/image-bookmark-hero.jpg",
    preview1: "/images/detail/desktop/image-bookmark-preview-1@2x.jpg",
    preview2: "/images/detail/desktop/image-bookmark-preview-2@2x.jpg",
  },
};

export default function ProjectPage() {
  const router = useRouter();

  return (
    <>
      <NavBar activeRoute="/portfolio"></NavBar>

      <main>
        {/* hero */}
        <section className="container mx-auto">
          <div className="relative w-full h-full mb-12">
            <img
              alt={`project preview for the ${proj.title} project`}
              className="object-contain lg:object-cover w-full h-full"
              src={proj.staticPhotos.hero}
            />
          </div>
        </section>

        <div className="container mx-auto flex flex-col gap-8 lg:gap-16 lg:flex-row">
          {/* overview */}
          <section className="w-full lg:w-2/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
              <div className="flex flex-col w-full">
                <div className="font-heading font-bold text-h2 md:text-h1">
                  {proj.title}
                </div>

                <p className="text-tuna/60 py-4 md:hidden lg:block">
                  {proj.description}
                </p>

                <ul className="font-bold text-body2 text-verdigris">
                  <li className="my-2">
                    Interaction Design / Front End Development
                  </li>
                  <li className="my-2">HTML / CSS / JS</li>
                </ul>

                <div className="mt-4">
                  <Button
                    label="View Project"
                    handleClick={() =>
                      router.push(`/portfolio/${proj.link}`)
                    }></Button>
                </div>
              </div>

              <p className="text-tuna/60 py-4 hidden md:block w-full lg:hidden lg:mr-16">
                {proj.description}
              </p>
            </div>
          </section>

          {/* details */}
          <div className="lg:w-3/5">
            <section className="container mx-auto">
              <header className="text-h3 md:text-h2 font-heading">
                Project Background
              </header>
              <article className="text-tuna/60">
                This project was a front-end challenge from Frontend Mentor.
                It&#39;s a platform that enables you to practice building
                websites to a design and project brief. Each challenge includes
                mobile and desktop designs to show how the website should look
                at different screen sizes. Creating these projects has helped me
                refine my workflow and solve real-world coding problems.
                I&#39;ve learned something new with each project, helping me to
                improve and adapt my style.
              </article>
            </section>

            <section className="container mx-auto my-8">
              <header className="text-h3 md:text-h2 font-heading">
                Static Previews
              </header>

              <div className="relative w-full h-full mt-4">
                <img
                  alt={`project preview for the ${proj.title} project`}
                  className="object-contain"
                  src={proj.staticPhotos.preview1}
                />
              </div>

              <div className="relative w-full h-full mt-4">
                <img
                  alt={`project preview for the ${proj.title} project`}
                  className="object-contain"
                  src={proj.staticPhotos.preview2}
                />
              </div>
            </section>
          </div>
        </div>
        {/* next and previous pages */}
        <section className="container mx-auto flex items-center justify-between flex-row flex-no-wrap border-t-2 border-b-2 solid border-tuna/5">
          <Link
            href={""}
            className="flex flex-col items-start md:flex-row md:items-center py-4 hover:bg-eggshell transition-colors flex-grow border-r-2 solid border-tuna/5">
            <Image
              className="mb-2 md:my-auto md:mx-4"
              alt="arrow left"
              src="/icons/arrow-left.svg"
              width={12}
              height={12}></Image>
            <span>
              <span className="block font-heading text-h3 md:text-h2">
                Manage
              </span>
              <span className="text-tuna/60 block -mt-2">Previous Project</span>
            </span>
          </Link>

          <Link
            href={""}
            className="flex flex-col items-end md:flex-row-reverse md:items-center py-4 hover:bg-eggshell transition-colors flex-grow">
            <Image
              className="mb-2 md:my-auto md:mx-4"
              alt="arrow right"
              src="/icons/arrow-right.svg"
              width={12}
              height={12}></Image>
            <span>
              <span className="block font-heading text-h3 md:text-h2">
                Manage
              </span>
              <span className="text-tuna/60 block -mt-2">Next Project</span>
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
