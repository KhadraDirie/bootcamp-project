export default function Header({ name }) {
    return (
        <div className="w-full max-w-6xl mx-auto py-4 px-4">
            <h1 className="tracking-widest text-5xl title-font font-medium text-black mb-1 m-5">{name} Page</h1>
        </div>
    );
}