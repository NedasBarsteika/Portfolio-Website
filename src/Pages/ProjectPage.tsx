import { useParams } from "react-router-dom";

const projectData = {
  1: { title: "Competence Form", description: "Competence form project made for the company Reiz Tech.", image: "./images/competence-form.png", codeLink: "https://github.com/NedasBarsteika/Competence-form" },
  2: { title: "Hackathon (Turboline) Project - Video Translator", description: "Collaborated with 3 other people towards making a video translator in around 60 hours.", image: "./images/video-translator.png", codeLink: "https://github.com/nevikelee/last2ndhackathon" },
  3: { title: "Online Shop for Fitness Products", description: "Created an eCommerce type web application where the user can order products from an online shop.", image: "./images/online-shop.png", codeLink: "https://github.com/NedasBarsteika/Fitness-Center-Blazor-eCommerce-App" },
  4: { title: "Portfolio Website", description: "Portfolio website that introduces me, lists my skills and my personal projects.", image: "./images/portfolio-website.png", codeLink: "https://github.com/NedasBarsteika/Portfolio-Website" },
};

export default function ProjectDetail() {
  const { id } = useParams(); // Access the `id` parameter from the URL
  const project = projectData[id as unknown as keyof typeof projectData]; // Type-safe access to project data

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
