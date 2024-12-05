export default function Skills() {
    return (
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
                        className="flex flex-col items-center justify-center p-5 border border-gray-600 rounded-lg"
                    >
                        <img
                            src={`./images/${skill.toLowerCase()}.png`}
                            alt={skill}
                            className="h-16 w-16 mb-4"
                        />
                        <p className="text-lg font-bold">{skill}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}