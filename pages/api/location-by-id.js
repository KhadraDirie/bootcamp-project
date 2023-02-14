//returns one location based on the id 

export default function handle(req,res) {
    const id = req.query.id; //one way of accessing data you pass on a GET request
    //we're passing the value of id as a query parameter
    // use the array.prototype.find() : 
    
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

      const foundLocation = locations.find((location) => {
        if (location.id===id){
            return true;
        }
        else{
            return false;
        }
      })
      res.json(foundLocation) 
    }

