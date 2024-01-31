"use client";

import { Button } from "@components/Button/Button";
import { NavBar } from "@components/NavBar/NavBar";
import { usePathname, useRouter } from "next/navigation";

type ProjectPreview = {
  title: string;
  description: string;
  thumbnailName: string;
  link: string;
};

const PROJECTS: ProjectPreview[] = [
  {
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    thumbnailName: "image-portfolio-manage.jpg",
    link: "manage",
  },
  {
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    thumbnailName: "image-portfolio-bookmark.jpg",
    link: "bookmark",
  },
  {
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    thumbnailName: "image-portfolio-insure.jpg",
    link: "insure",
  },
  {
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    thumbnailName: "image-portfolio-fylo.jpg",
    link: "fylo",
  },
];

export default function PortfolioPage() {
  const activeRoute = usePathname();
  const router = useRouter();

  return (
    <>
      <NavBar activeRoute={activeRoute}></NavBar>

      {PROJECTS.map((proj, idx) => (
        <div
          key={idx}
          className={`my-8 md:my-16 px-8 container mx-auto flex flex-col ${idx % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-16 justify-center items-stretch`}>
          <div className="flex-grow w-full relative self-stretch min-h-[320px]">
            <img
              className="object-cover m-auto"
              alt={`thumbnail preview for the ${proj.title} project`}
              srcSet={`/images/portfolio/mobile/${proj.thumbnailName} 320w, /images/portfolio/tablet/${proj.thumbnailName} 768w, /images/portfolio/desktop/${proj.thumbnailName} 1200w`}
              sizes="(max-width: 320px) 280px, (max-width: 768px) 720px, 1200px"
            />
          </div>

          <div className="w-full self-stretch flex-grow flex flex-col justify-center py-8 border-t-2 border-b-2 solid border-tuna/5">
            <div className="font-heading font-bold text-h2 md:text-h1">
              {proj.title}
            </div>

            <p className="text-tuna/60 py-4">{proj.description}</p>

            <div>
              <Button
                label="View Project"
                handleClick={() =>
                  router.push(`/portfolio/${proj.link}`)
                }></Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
