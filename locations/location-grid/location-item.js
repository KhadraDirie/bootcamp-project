
export default function handler(req,res){
    const locations = [
        
            {
                id: "paris",
                title: "Paris",
                data: "March 2019",
                imgUrl: "/assets/paris.jpg"
            },
            {
                id: "bali",
                title: "Bali",
                author: "August 2019",
                imgUrl: "/assets/bali.jpg"
            },
            {
                id: "new-york-city",
                title: "New York City",
                author: "September 2022",
                imgUrl: "/assets/nyc.jpg"
            }
        ];
        res.json(locations)
    
}