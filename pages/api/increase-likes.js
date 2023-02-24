import sql from "@/utils/postgres"



export default async function handler(req,res){
   const id = +req.query.id; //the + tells js to turn the string into a number 
   const likes = +req.query.likes;

   if (id === null || id === undefined){
    res.status(404).json({message:"Location id is required"}) 
   }
   if (likes === null || likes === undefined){
    res.status(404).json({message:"Likes is required"})
   }

   const locations = await sql`
   update locations
   set likes = ${likes}
   where id = ${id}
   
   `;

   res.json({message: "Number of likes updated"})
}

//a new endpoint called increase likes available, takes in two query parameters , id and number of likes, make a sql request to update those values 