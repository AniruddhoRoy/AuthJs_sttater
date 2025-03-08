"use server"
import db from "@/prisma/db";

export async function Find_Token_By_Email(email:string){
    const token = await db.token.findFirst({
        where:{
            userEmail:email
        }
    })
    if(!token)
    {
        return null
    }
    return token;
}