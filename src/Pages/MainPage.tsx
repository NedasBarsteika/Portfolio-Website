import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

// ── Data ──────────────────────────────────────────────────────────────────────

const projectData = {
    1: { title: "Iterova", description: "B2B SaaS platform for sprint and task planning with built-in financial automation. Built as a collaborative academic and startup project.", image: "./images/iterova.png", codeLink: null as string | null, liveLink: "https://iterova.com/" },
    2: { title: "Competence Form", description: "Competence form project made for the company Reiz Tech.", image: "./images/competence-form.png", codeLink: "https://github.com/NedasBarsteika/Competence-form", liveLink: null as string | null },
    3: { title: "Hackathon (Turboline) Project - Video Translator", description: "Collaborated with 3 other people towards making a video translator in around 60 hours.", image: "./images/video-translator.png", codeLink: "https://github.com/nevikelee/last2ndhackathon", liveLink: null as string | null },
    4: { title: "Portfolio Website", description: "Portfolio website that introduces me, lists my skills and my personal projects.", image: "./images/portfolio-website.png", codeLink: "https://github.com/NedasBarsteika/Portfolio-Website", liveLink: null as string | null },
};

const experienceData = [
    {
        company: "Pixinn IT",
        logo: "./images/pixinn_logo.png",
        role: "Junior Web Developer",
        techStack: "React | TypeScript | Next.js | GraphQL",
        description: [
            "Built and maintained production-ready UI/UX across various websites",
            "Integrated e-Sveikata and other third-party services",
            "Implemented Excel and PDF exporting, AI-based file/document processing",
            "Worked on niche features like polygon calculations for satellite/geo views",
        ],
        value: [
            "Delivered a finance overhaul including VAT calculations",
            "Trusted as a code reviewer",
        ],
        startDate: "April 2025",
        endDate: null, // null = Present
    },
];

const skills = [
    { name: "React", icon: "./images/react.png" },
    { name: "TypeScript", icon: "./images/typescript.png" },
    { name: "Next.js", icon: "./images/nextjs.png" },
    { name: "GraphQL", icon: "./images/graphql.png" },
];

// ── Scroll animation wrapper ──────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Main() {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() === "") {
            alert("Message cannot be empty!");
            return;
        }
        if (email.trim() === "" || name.trim() === "" || subject.trim() === "") {
            alert("Please input all the information");
            return;
        }
        if (!email.includes("@")) {
            alert('Invalid email address: Missing "@" symbol.');
            return;
        }

        const parms = { name, email, subject, message };

        emailjs
            .send("service_6biin5b", "template_z4lejpf", parms, "E-KOkwKwHaxly0TKI")
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Message sent successfully!");
                    setMessage("");
                    setEmail("");
                    setName("");
                    setSubject("");
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact Me", href: "#contact-me" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* ── NAVBAR ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                    <a href="/" className="text-sm font-bold tracking-tight text-black uppercase">
                        Nedas Barsteika
                    </a>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="md:hidden p-2 text-black"
                        aria-controls="navbar-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" aria-hidden="true">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent border-b md:border-0 border-neutral-100 md:gap-8 px-6 md:px-0 py-4 md:py-0`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 md:py-0 text-sm text-neutral-600 hover:text-black transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="relative min-h-screen flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="./images/hero.png"
                        alt="Nedas Barsteika presenting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                </div>
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white/70 text-sm md:text-base tracking-widest uppercase mb-4"
                    >
                        Full-stack Web Developer
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-8"
                    >
                        Nedas
                        <br />
                        Barsteika
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex gap-4"
                    >
                        <a
                            href="/documents/Nedas_Barsteika_CV.pdf"
                            download
                            className="px-7 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
                        >
                            CV
                        </a>
                        <a
                            href="#contact-me"
                            className="px-7 py-3 rounded-full border border-white/60 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </header>

            {/* ── ABOUT ── */}
            <section id="about" className="py-24 md:py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About</h2>
                        <div className="w-12 h-px bg-black mb-12" />
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg leading-relaxed text-neutral-600 mb-8">
                            Welcome to my website! I'm currently a web developer at Pixinn with 1+ years of experience, a third year student, currently studying Software Systems at KTU, and a member of a talent academy called SKILLed FinTech.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg leading-relaxed text-neutral-600 mb-8">
                            I'm an ambitious, results-driven developer focused on building systems that solve real problems. I bring value through a solid understanding of system design principles, and I'm constantly pushing to deepen that knowledge. I thrive in environments where I can contribute meaningfully while continuing to grow.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className="text-lg leading-relaxed text-neutral-600">
                            With strong passion for learning, problem-solving abilities and effective communication skills, I excel in both team and individual settings. I am driven to take on complex challenges, constantly seeking to grow and contribute meaningfully to innovative and impactful projects.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section id="skills" className="py-24 md:py-32 px-6 border-t border-neutral-200">
                <style>{`
                    .flip-card { perspective: 1000px; }
                    .flip-card-inner {
                        transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
                        transform-style: preserve-3d;
                    }
                    .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
                    .flip-card-front, .flip-card-back {
                        backface-visibility: hidden;
                        -webkit-backface-visibility: hidden;
                    }
                    .flip-card-back { transform: rotateY(180deg); }
                `}</style>
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skills</h2>
                        <div className="w-12 h-px bg-black mb-16" />
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, i) => (
                            <FadeIn key={skill.name} delay={i * 0.15}>
                                <div className="flip-card cursor-pointer">
                                    <div className="flip-card-inner relative w-full" style={{ minHeight: "280px" }}>
                                        {/* Front */}
                                        <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-md border border-neutral-200 py-12 md:py-16">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-24 h-24 md:w-28 md:h-28 mb-8 object-contain"
                                            />
                                            <h3 className="text-3xl font-black tracking-tight text-black">
                                                {skill.name}
                                            </h3>
                                        </div>
                                        {/* Back */}
                                        <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-md border border-neutral-200 py-12 md:py-16">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-24 h-24 md:w-28 md:h-28 mb-8 object-contain"
                                            />
                                            <h3 className="text-3xl font-black tracking-tight text-black">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="py-24 md:py-32 px-6 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
                        <div className="w-12 h-px bg-black mb-16" />
                    </FadeIn>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-neutral-300" />

                        {experienceData.map((exp, i) => (
                            <FadeIn key={i} delay={0.1}>
                                <div className="relative flex gap-8 md:gap-12 pl-12 md:pl-20 pb-12">
                                    {/* Timeline dot */}
                                    <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-black border-2 border-white ring-1 ring-black" />

                                    <div className="flex-1">
                                        {/* Date range */}
                                        <p className="text-sm text-neutral-500 tracking-wide mb-2">
                                            {exp.startDate} - {exp.endDate === null ? "Present" : exp.endDate}
                                        </p>

                                        <div className="flex items-start gap-6">
                                            {/* Company logo */}
                                            {exp.logo ? (
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className="w-14 h-14 rounded-lg object-contain flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="flex w-14 h-14 rounded-lg bg-neutral-100 border border-neutral-200 items-center justify-center flex-shrink-0">
                                                    <span className="text-neutral-400 text-xs font-medium">Logo</span>
                                                </div>
                                            )}

                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
                                                    {exp.company}
                                                </h3>
                                                <p className="text-lg font-medium text-neutral-700 mb-2">
                                                    {exp.role}
                                                </p>
                                                {exp.techStack && (
                                                    <p className="text-sm text-neutral-500 mb-5 tracking-wide">
                                                        {exp.techStack}
                                                    </p>
                                                )}

                                                {/* Responsibilities */}
                                                <ul className="space-y-2 mb-6">
                                                    {exp.description.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-neutral-600 leading-relaxed">
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Key Contributions */}
                                                {exp.value.length > 0 && (
                                                    <>
                                                        <p className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Key Contributions</p>
                                                        <ul className="space-y-2">
                                                            {exp.value.map((item, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-neutral-600 leading-relaxed">
                                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" className="py-24 md:py-32 px-6 border-t border-neutral-200">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
                        <div className="w-12 h-px bg-black mb-16" />
                    </FadeIn>
                    <div className="flex flex-col gap-12">
                        {Object.entries(projectData).map(([id, project], i) => (
                            <FadeIn key={id} delay={i * 0.1}>
                                <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 border border-neutral-200 rounded-2xl transition-shadow duration-300 hover:shadow-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full md:w-1/2 rounded-xl"
                                    />
                                    <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
                                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-600 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-3 justify-center md:justify-start">
                                            {project.codeLink && (
                                                <a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
                                                >
                                                    Code
                                                </a>
                                            )}
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
                                                >
                                                    Live
                                                </a>
                                            )}
                                            <Link
                                                to={`/project/${id}`}
                                                className="px-5 py-2.5 rounded-full border border-black text-black text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
                                            >
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ME ── */}
            <section id="contact-me" className="py-24 md:py-32 px-6 border-t border-neutral-200">
                <div className="max-w-2xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact Me</h2>
                        <div className="w-12 h-px bg-black mb-12" />
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="flex flex-col items-center md:items-start gap-2 mb-12">
                            <p className="text-neutral-600">
                                Email:{" "}
                                <a href="mailto:nedas.barsteika@gmail.com" className="text-black underline underline-offset-4 hover:no-underline">
                                    nedas.barsteika@gmail.com
                                </a>
                            </p>
                            <p className="text-neutral-600">
                                LinkedIn:{" "}
                                <a href="https://www.linkedin.com/in/nedas-barsteika/" className="text-black underline underline-offset-4 hover:no-underline" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/nedas-barsteika
                                </a>
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <form onSubmit={handleSendMessage} className="flex flex-col gap-6">
                            <input
                                type="text"
                                className="w-full py-3 border-b border-neutral-300 bg-transparent text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors duration-200"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                className="w-full py-3 border-b border-neutral-300 bg-transparent text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors duration-200"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                className="w-full py-3 border-b border-neutral-300 bg-transparent text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors duration-200"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                className="w-full h-36 py-3 border-b border-neutral-300 bg-transparent text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="self-start px-8 py-3 rounded-full bg-black text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="border-t border-neutral-200 py-8 px-6">
                <p className="text-center text-sm text-neutral-400">
                    &copy; {new Date().getFullYear()} Nedas Barsteika
                </p>
            </footer>
        </motion.div>
    );
}
