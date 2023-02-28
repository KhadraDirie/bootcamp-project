//gets locations form sql database for search page

import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const search = req.query.search;

    let locations = [];

    if(search === null || search === undefined){
        locations = await sql`
        select * from search_locations
        `
    }
    else{
       locations = await sql`
        select * from search_locations 
where title LIKE ${search}
        `
    }
    res.json(locations);
}