
type ProjectPreview = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  staticPhotos: {
    thumbnail: string;
    hero: string;
    preview1: string;
    preview2: string;
  }
};

export const PROJECTS: ProjectPreview[] = [
  {
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    link: "manage",
    techStack: [
      "Interaction Design / Front End Development",
      "HTML / CSS / JS"
    ],
    staticPhotos: {
      thumbnail: "image-portfolio-manage.jpg",
      hero: "/images/detail/desktop/image-manage-hero.jpg",
      preview1: "/images/detail/desktop/image-manage-preview-1@2x.jpg",
      preview2: "/images/detail/desktop/image-manage-preview-2@2x.jpg",
    },
  },
  {
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    link: "bookmark",
    techStack: [
      "Interaction Design / Front End Development",
      "HTML / CSS / JS"
    ],
    staticPhotos: {
      thumbnail: "image-portfolio-bookmark.jpg",
      hero: "/images/detail/desktop/image-bookmark-hero.jpg",
      preview1: "/images/detail/desktop/image-bookmark-preview-1@2x.jpg",
      preview2: "/images/detail/desktop/image-bookmark-preview-2@2x.jpg",
    },
  },
  {
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    link: "insure",
    techStack: [
      "Interaction Design / Front End Development",
      "HTML / CSS / JS"
    ],
    staticPhotos: {
      thumbnail: "image-portfolio-insure.jpg",
      hero: "/images/detail/desktop/image-insure-hero.jpg",
      preview1: "/images/detail/desktop/image-insure-preview-1@2x.jpg",
      preview2: "/images/detail/desktop/image-insure-preview-2@2x.jpg",
    },
  },
  {
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    link: "fylo",
    techStack: [
      "Interaction Design / Front End Development",
      "HTML / CSS / JS"
    ],
    staticPhotos: {
      thumbnail: "image-portfolio-fylo.jpg",
      hero: "/images/detail/desktop/image-fylo-hero.jpg",
      preview1: "/images/detail/desktop/image-fylo-preview-1@2x.jpg",
      preview2: "/images/detail/desktop/image-fylo-preview-2@2x.jpg",
    },
  },
];
