// retrieves existing data from a database table.


import sql from "../../utils/postgres";

export default async function handler (req,res){
    const messages = await sql`
    select * from contact_messages 
`;

res.json({messages:messages}); 
}