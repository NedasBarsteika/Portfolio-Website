import { motion } from "framer-motion";
// import Navbar from "../components/navbar";
// import Header from "../components/header";
// import AboutMe from "../components/about-me";
// import Skills from "../components/skills";
// import Projects from "../components/projects";
// import ContactMe from "../components/contact-me";
// import Footer from "../components/footer";
import Button from "../components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const projectData = {
    1: { title: "Competence Form", description: "Competence form project made for the company Reiz Tech.", image: "./images/competence-form.png", codeLink: "https://github.com/NedasBarsteika/Competence-form" },
    2: { title: "Hackathon (Turboline) Project - Video Translator", description: "Collaborated with 3 other people towards making a video translator in around 60 hours.", image: "./images/video-translator.png", codeLink: "https://github.com/nevikelee/last2ndhackathon" },
    3: { title: "Online Shop for Fitness Products", description: "Created an eCommerce type web application where the user can order products from an online shop.", image: "./images/online-shop.png", codeLink: "https://github.com/NedasBarsteika/Fitness-Center-Blazor-eCommerce-App" },
    4: { title: "Portfolio Website", description: "Portfolio website that introduces me, lists my skills and my personal projects.", image: "./images/portfolio-website.png", codeLink: "https://github.com/NedasBarsteika/Portfolio-Website" },
};

export default function Main() {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() === '') {
            alert('Message cannot be empty!');
            return;
        }

        // Replace this alert with an actual backend email service
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer /> */}

            {/* NAVBAR */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="font-semibold" href="#">NEDAS BARSTEIKA</a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                            </li>
                            <li>
                                <a href="#contact-me" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HEADER */}
            <header className="h-auto flex flex-col items-center mt-20 mb-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Hello!</h1>
                    <h2 className="text-3xl mt-2">
                        I am <span className="text-yellow-400">Nedas Barsteika</span>
                    </h2>
                    <p className="text-xl italic">- Full-stack Developer -</p>
                    <div className="mt-5">
                        <Button title="CV" link="" />
                        <Button title="Contact Me" link="#contact-me" />
                    </div>
                </div>
            </header>

            {/* ABOUT ME */}
            <section id="about" className="py-20 px-10 mb-10">
                <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
                    About
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto mb-10">
                    👋 Welcome to my website! I am a second year student, currently studying Software Systems at KTU.
                </p>
                <p className="text-center text-lg max-w-4xl mx-auto mb-10">
                    🎯 I would describe myself as an ambitious, goal oriented person, constantly pursuing opportunities to enhance my existing skills while also trying to learn new ones. Currently, I possess proficiency in programming languages such as <span className="text-yellow-400">C#</span>, <span className="text-yellow-400">Java</span> and <span className="text-yellow-400">Python</span>. On the front-end, I have expertise in <span className="text-yellow-400">HTML</span>, <span className="text-yellow-400">CSS</span>, <span className="text-yellow-400">JavaScript</span>, <span className="text-yellow-400">TypeScript</span> and I am familiar with modern libraries like <span className="text-yellow-400">React</span>, <span className="text-yellow-400">Bootstrap</span> and <span className="text-yellow-400">Tailwind</span>. This allows me to create intuitive and responsive user interfaces that enhance the overall user experience.
                </p>
                <p className="text-center text-lg max-w-4xl mx-auto">
                    🚀 With strong passion for learning, problem-solving abilities and effective communication skills, I excel in both team and individual settings. I am driven to take on complex challenges, constantly seeking to grow and contribute meaningfully to innovative and impactful projects.
                </p>
            </section>

            {/* SKILLS */}
            <section id="skills" className="py-20">
                <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
                    Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
                    {[
                        'C-Sharp .NET',
                        'Git',
                        'Docker',
                        'SQL',
                        'HTML-CSS',
                        'JavaScript',
                        'TypeScript',
                        'React',
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="flex flex-col items-center justify-center p-5 border border-gray-600 rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={`./images/${skill.toLowerCase()}.png`}
                                alt={skill}
                                className="h-16 w-16 mb-4 transform transition-transform duration-300 hover:scale-125"
                            />
                            <p className="text-lg font-bold">{skill}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="py-20 px-10">
                <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
                    Projects
                </h2>
                <div className="flex flex-col gap-12 max-w-5xl mx-auto mb-20">
                    {Object.entries(projectData).map(([id, project]) => (
                        <div key={id} className="flex flex-col md:flex-row items-center gap-6 border border-gray-600 rounded-lg p-6 hover:shadow-lg transition">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full md:w-1/2 rounded-lg border-2"
                            />
                            <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-110"
                                    >
                                        Code
                                    </a>
                                    <Link
                                        to={`/project/${id}`}
                                        className="border border-red-500 text-red-500 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transform transition-transform duration-300 hover:scale-110"
                                    >
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT ME */}
            <section id="contact-me" className="py-20">
                <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
                    Contact Me
                </h2>
                <div className="max-w-4xl mx-auto">
                    {/* Contact Links */}
                    <div className="flex flex-col items-center mb-10">
                        <p className="text-lg mb-4">
                            Email: <a href="mailto:nedas.barsteika@gmail.com" className="text-blue-500">nedas.barsteika@gmail.com</a>
                        </p>
                        <p className="text-lg">
                            LinkedIn: <a href="https://www.linkedin.com/in/nedas-barsteika/" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/nedas-barsteika/</a>
                        </p>
                    </div>

                    {/* Message Box */}
                    <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
                        <textarea
                            className="w-full h-40 p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Write your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-5 text-center bg-dark">
                <p>© 2024 Nedas Barsteika - All Rights Reserved</p>
            </footer>
        </motion.div>
    );
}