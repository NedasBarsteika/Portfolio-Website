export default function Projects() {
    return (
        <section id="projects" className="py-20 px-10">
            <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
                Projects
            </h2>
            <div className="flex flex-col gap-12 max-w-5xl mx-auto mb-20">
                {[
                    {
                        title: 'Competence Form',
                        description:
                            'Competence form project made for the company Reiz Tech',
                        image: './images/competence-form.png',
                        codeLink: 'https://github.com/NedasBarsteika/Competence-form',
                    },
                    {
                        title: 'Hackathon (Turboline) Project - Video Translator',
                        description:
                            'Collaborated with 3 other people towards making a video translator in around 60 hours.',
                        image: './images/video-translator.png',
                        codeLink: 'https://github.com/nevikelee/last2ndhackathon',
                    },
                    {
                        title: 'Online Shop for Fitness Products',
                        description:
                            'Created an eCommerce type web application where the user can order products from an online shop.',
                        image: './images/online-shop.png',
                        codeLink: 'https://github.com/NedasBarsteika/Fitness-Center-Blazor-eCommerce-App',
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-6 border border-gray-600 rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full md:w-1/2 rounded-lg"
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
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-110"
                                >
                                    Code
                                </a>
                                <button
                                    //onClick={() => router.push(project.morePage)}
                                    className="border border-red-500 text-red-500 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transform transition-transform duration-300 hover:scale-110"
                                >
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
