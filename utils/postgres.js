import postgres from "postgres";



const sql = postgres(process.env.POSTGRES_CONNECTION_STRING) //use when you want to access sql database 

export default sql