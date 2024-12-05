export default function MyButton({ title, link }: { title: string, link: string }) {
    return (
        <a href={link}>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg mr-2 transform transition-transform duration-300 hover:scale-110">{title}</button>
        </a>
    );
}