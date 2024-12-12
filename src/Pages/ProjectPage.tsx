import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const projectData = {
  1: {
    title: "Competence Form",
    description: [
      "As part of the 'Inovacijų Dirbtuvės' program, I had the exciting opportunity to collaborate with a team of 6 talented individuals to develop a modern solution for Reiz Tech. Our challenge was to enhance their existing method of assessing employee competences, which needed improvements in both functionality and user experience.",
      "We designed and built a survey-based application that dynamically evaluated employee competences based on their responses. The app features a sleek UX/UI design tailored to showcase competences and their levels in a visually engaging and easy-to-understand way.",
      "I took ownership of the frontend development, including: Transforming sketched designs into functional components using React, TypeScript, and Tailwind, implementing login and registration pages with error handling and validation, connecting the frontend to the backend to ensure questions, answers, and descriptions were fully dynamic.",
      "All the technologies used were: React, TypeScript, Tailwind, SQL, C# .NET. I used React, TypeScript, and Tailwind. This project not only strengthened my technical skills but also deepened my understanding of collaboration and delivering impactful solutions tailored to client needs.",
    ],
    image: "/images/competence-form.png",
    codeLink: "https://github.com/NedasBarsteika/Competence-form",
    technologies: ["React", "TypeScript", "Tailwind"],
    features: ["Dynamic survey app", "Animations", "Account management/registration", "Admin page", "Modern design", "Database keeping"],
  },
  2: {
    title: "Hackathon (Turboline) Project - Video Translator",
    description: [
      "Collaborated with 3 other people towards making a video translator in around 60 hours.",
      "To explain our idea in simple terms, the user uploads a video to our website, selects a languge they want the video to be translated to and the website replaces the original spoken audio with the new audio in the selected language.",
      "With the help of hackathon's organizers, we were given temporary access to Chat GPT's AI and were able to use its' functions. In our project, we took advantage of its' 3 main features. To translate the voice in the original video, the program first transcripts the audio and transforms it into words. Secondly, the AI translates the text into the user's selected language. Thirdly, with the text to speech function, the AI is able to turn the translated text back into the voice format and replace the original sound of the video.",
    ],
    image: "/images/video-translator.png",
    codeLink: "https://github.com/nevikelee/last2ndhackathon",
    technologies: ["Python", "HTML/CSS"],
    features: ["Quick translation", "Artificial Inteligence", "Saving previous videos"],
  },
  3: {
    title: "Online Shop for Fitness Products",
    description: [
      "Created an eCommerce type web application where the user can order products from an online shop. The backend is programmed in C# (ASP.NET Core) and the front-end is powered by Blazor (Bootstrap).",
      "The program manages 2 SQL databases (listed products and orders from clients). Whenever a user orders a product, the Docker application runs the Kafka client, which manages microservices and lowers the total quantity of a product by the order quantity.",
      "The project is currently not fully complete. I plan to add user authentication, registration and signing in features, a seperate admin page to track all the orders, a cart page for the user that is logged in and a more professional check-out screen powered by Stripe.",
    ],
    image: "/images/online-shop.png",
    codeLink: "https://github.com/NedasBarsteika/Fitness-Center-Blazor-eCommerce-App",
    technologies: ["Blazor", "C# ASP.NET Core", "SQL", "Docker"],
    features: ["All products screen", "Shopping cart", "Checking out screen", "Responsive", "Database keeping"],
  },
  4: {
    title: "Portfolio Website",
    description: [
      "Created a website that introduces me, lists my skills and my personal projects.",
      "The website features modern design, form validation, serverless message sending with EmailJS.",
      "I designed the website in a way that would be scalable, as I can easily add another skill or project to the objects array, which would make it appear in the website.",
      "The main technologies I used were TypeScript, React and a CSS framework called Tailwind.",
    ],
    image: "/images/portfolio-website.png",
    codeLink: "https://github.com/NedasBarsteika/Portfolio-Website",
    technologies: ["TypeScript", "React", "Tailwind"],
    features: ["Modern design", "Animations", "Form validation", "Serverless message sending with EmailJS"],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id as unknown as keyof typeof projectData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="project-page min-h-screen bg-dark text-white p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-110"
        >
          Return to main page
        </button>

        {/* Project Details */}
        <div className="mt-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-10 border-2"
          />

          <h1 className="text-4xl font-bold mb-10 ">{project.title}</h1>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white py-2 px-4 rounded-lg inline-block transform transition-transform duration-300 hover:bg-red-600 hover:scale-110"
          >
            Code
          </a>

          <h2 className="text-2xl font-semibold mt-20 mb-10 underline decoration-red-500">Description</h2>
          <div className="mt-10 mb-8 text-lg max-w-4xl mx-auto">
            {project.description.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
                {index < project.description.length - 1 && (
                  <hr className="border-red-500 my-6" />
                )}
              </div>
            ))}
          </div>

          {/* Technologies Used */}
          <h2 className="text-2xl font-semibold mt-20 mb-4 underline decoration-red-500">Technologies used</h2>
          <ul className="list-disc list-inside mb-8 list-none space-y-2">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          {/* Features */}
          <h2 className="text-2xl font-semibold mt-20 mb-4 underline decoration-red-500">Features</h2>
          <ul className="list-disc list-inside mb-8 list-none space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 py-5 text-center bg-dark">
          <p>© 2024 Nedas Barsteika - All Rights Reserved</p>
        </footer>
      </div>
    </motion.div>
  );
}
