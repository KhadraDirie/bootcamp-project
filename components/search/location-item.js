
export default function LocationItem({ location }) {
    const { id, title, img_url, visited_date } = location;

    return (  
        <div key={id} className="w-full h-40 bg-red-100 relative">
            <img src={img_url} className="w-full h-full brightness-75" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <p className="text-black font-bold text-3xl">{title}</p>
               < p className="text-black font-bold text-3xl">{visited_date}</p>
            </div>
        </div>
    )
}