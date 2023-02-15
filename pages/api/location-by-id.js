//returns one location based on the id 

import sql from "../../utils/postgres";

export default async function handler(req, res) {
  
  const id = req.query.id;

  const locations = await sql`
      select * from locations
      where id = ${id}
  `;

  if (locations.length < 1) {
      res.status(404).json({ message: "Location not found" });
      return;
  }

  const foundLocation = locations[0];

  res.json({ locations: foundLocation });
}

