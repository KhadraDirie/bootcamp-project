//add new data to a database table


import sql from "../../utils/postgres";

export default async function handle (req,res){
    const{name,email,message} = req.body
    const response = await sql`
    insert into contact_messages
         (name, message, email)
    values
        (${name}, ${message}, ${email})

    `;
    res.json({message: "Submitted"});
}