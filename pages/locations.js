import sql from "../utils/postgres";

export default function handler(req,res){

    

const locations = [
    {
      id: "1",
      title: "Paris",
      date: "March 2019",
      imgUrl: "/assets/paris.jpg"
    },
    {
      id: "2",
      title: "Bali",
      date: "August 2019",
      imgUrl: "/assets/bali.jpg"
    },
    { 
      id: "3",
      title: "New York City",
      date: "September 2022",
      imgUrl: "/assets/nyc.jpg"
    }
  ];
res.json(locations)

}
  