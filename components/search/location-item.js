export default function LocationItem({ location }) {
    const { id, title, img_url, visited_date } = location;
 
    return (
      
      <div key={id} className="w-full h-40 bg-rose-200 relative">
        <img src={img_url} alt={title} className="w-full h-full brightness-75" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <p className="tracking-widest text-md title-font font-medium text-black">{title}</p>
          <p className="tracking-widest text-md title-font font-medium text-black">{visited_date}</p>
        </div>
      </div>
    
    );
  }
  