//gets locations form sql database 
import sql from "@/utils/postgres";


    export default async function handler(req, res) {
        const locations = await sql `
            select * from search_locations
        `;

    res.json(locations)
}