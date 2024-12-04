export default function MyButton({ title, link }: { title: string, link: string }) {
    return (
        <a href={link}>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg mr-2">{title}</button>
        </a>
    );
}