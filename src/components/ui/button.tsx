export default function MyButton({ title, link, variant = "filled" }: { title: string; link: string; variant?: "filled" | "outlined" }) {
    const base = "px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 inline-block";
    const styles = variant === "filled"
        ? `${base} bg-black text-white hover:bg-neutral-800`
        : `${base} border border-white text-white hover:bg-white hover:text-black`;

    return (
        <a href={link} className={styles}>
            {title}
        </a>
    );
}
