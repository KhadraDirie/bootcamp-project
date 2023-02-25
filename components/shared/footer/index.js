import Link from "next/link";

export default function Footer({ href, title }) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-5 px-4">
        
            <Link className = "bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4  rounded focus:outline-none focus:shadow-outline" href={href}>
                {title}
            </Link>
        </div>
    )
}