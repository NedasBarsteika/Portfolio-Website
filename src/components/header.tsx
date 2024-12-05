import Button from "./ui/button";

export default function Header() {
    return (
        <header className="h-auto flex flex-col items-center mt-20 mb-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hello!</h1>
                <h2 className="text-3xl mt-2">
                    I am <span className="text-yellow-400">Nedas Barsteika</span>
                </h2>
                <p className="text-xl italic">- Full-stack Developer -</p>
                <div className="mt-5">
                    <Button title="CV" link=""/>
                    <Button title="Contact Me" link="#contact-me"/>
                </div>
            </div>
        </header>
    );
}