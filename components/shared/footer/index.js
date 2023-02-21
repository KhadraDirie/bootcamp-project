import Link from "next/link";

export default function Footer({ href, title }) {
    return (
        <div className="mb-4 py-4">
            <Link className = "bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4  rounded focus:outline-none focus:shadow-outline" href={href}>
                Go to Home {title}
            </Link>
        </div>
    )
}