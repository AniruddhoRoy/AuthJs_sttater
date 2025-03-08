"use server"
import db from "@/prisma/db";

export async function Find_User(email:string) {
    const user = await db.user.findUnique({
        where:{
            email
        }
    })
    return user
}