import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, ReactNode } from "react";

const projectData = {
  1: {
    title: "Iterova",
    description: [
      "Iterova is a B2B SaaS platform designed to streamline sprint and task planning for IT teams, with built-in financial automation to reduce manual overhead.",
      "Built as a collaborative academic and startup project, the platform combines project management with financial tooling - enabling teams to track task costs, generate invoices, and sync work schedules with Google Calendar through a unified dashboard.",
      "My responsibilities included building the task and invoice import feature with AI-powered header mapping, implementing the invoice generation flow and Sąskaita123 integration, implementing email sending to third parties, and implementing payment processing with Stripe.",
    ],
    image: "/images/iterova.png",
    codeLink: null as string | null,
    liveLink: "https://iterova.com/",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    features: [
      "Sprint & task planning dashboard",
      "Automated cost calculation per task/sprint",
      "Invoice generation (integrated with Sąskaita123)",
      "Google Calendar sync",
      "AI-assisted CSV task and invoice import with intelligent header mapping",
      "Payment processing with Stripe",
      "Email sending to third parties",
    ],
  },
  2: {
    title: "Competence Form",
    description: [
      "As part of the 'Inovacijų Dirbtuvės' program, I had the exciting opportunity to collaborate with a team of 6 talented individuals to develop a modern solution for Reiz Tech. Our challenge was to enhance their existing method of assessing employee competences, which needed improvements in both functionality and user experience.",
      "We designed and built a survey-based application that dynamically evaluated employee competences based on their responses. The app features a sleek UX/UI design tailored to showcase competences and their levels in a visually engaging and easy-to-understand way.",
      "I took ownership of the frontend development, including: Transforming sketched designs into functional components using React, TypeScript, and Tailwind, implementing login and registration pages with error handling and validation, connecting the frontend to the backend to ensure questions, answers, and descriptions were fully dynamic.",
      "All the technologies used were: React, TypeScript, Tailwind, SQL, C# .NET. I used React, TypeScript, and Tailwind. This project not only strengthened my technical skills but also deepened my understanding of collaboration and delivering impactful solutions tailored to client needs.",
    ],
    image: "/images/competence-form.png",
    codeLink: "https://github.com/NedasBarsteika/Competence-form",
    liveLink: null as string | null,
    technologies: ["TypeScript", "React", "Tailwind"],
    features: ["Dynamic survey app", "Animations", "Account management/registration", "Admin page", "Modern design", "Database keeping"],
  },
  3: {
    title: "Hackathon (Turboline) Project - Video Translator",
    description: [
      "Collaborated with 3 other people towards making a video translator in around 60 hours.",
      "To explain our idea in simple terms, the user uploads a video to our website, selects a languge they want the video to be translated to and the website replaces the original spoken audio with the new audio in the selected language.",
      "With the help of hackathon's organizers, we were given temporary access to Chat GPT's AI and were able to use its' functions. In our project, we took advantage of its' 3 main features. To translate the voice in the original video, the program first transcripts the audio and transforms it into words. Secondly, the AI translates the text into the user's selected language. Thirdly, with the text to speech function, the AI is able to turn the translated text back into the voice format and replace the original sound of the video.",
    ],
    image: "/images/video-translator.png",
    codeLink: "https://github.com/nevikelee/last2ndhackathon",
    liveLink: null as string | null,
    technologies: ["Python", "HTML/CSS"],
    features: ["Quick translation", "Artificial Inteligence", "Saving previous videos"],
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
    liveLink: null as string | null,
    technologies: ["TypeScript", "React", "Tailwind"],
    features: ["Modern design", "Animations", "Form validation", "Serverless message sending with EmailJS"],
  },
};

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id as unknown as keyof typeof projectData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-neutral-600">Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-black"
    >
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-medium text-neutral-600 hover:text-black transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
            >
              View Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
            >
              Visit Site
            </a>
          )}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Project image */}
        <FadeIn>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-md mb-12"
          />
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            {project.title}
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Description</h2>
          <div className="w-10 h-px bg-black mb-8" />
          <div className="space-y-6 mb-16">
            {project.description.map((paragraph, index) => (
              <p key={index} className="text-neutral-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Technologies */}
        <FadeIn delay={0.1}>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Technologies</h2>
          <div className="w-10 h-px bg-black mb-8" />
          <div className="flex flex-wrap gap-3 mb-16">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.1}>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Features</h2>
          <div className="w-10 h-px bg-black mb-8" />
          <ul className="space-y-3 mb-16">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-600">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8 px-6">
        <p className="text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Nedas Barsteika
        </p>
      </footer>
    </motion.div>
  );
}
