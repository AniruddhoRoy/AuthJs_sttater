"use server"
import db from "@/prisma/db";

export async function Create_Options(title:string , poleId:string){
    const option = await db.options.create({
        data:{
            title,
            poleId
        }
    })
    return option
}