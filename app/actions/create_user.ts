"use server"
import db from "@/prisma/db";

export async function Create_User(name:string,email:string){
    const user = await db.user.create({
        data:{
            name,email
        }
    })
    return user;
}