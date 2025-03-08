"use server"
import { Data } from "@/fakedata"
import db from "@/prisma/db"
import { Options } from "@prisma/client"

export async function Create_Pole(title:string,options:Options[]|[]){
    const pole = await db.pole.create({
        data:{
            title,
            userId:Data.id,
            options:{
                connect:options
            }
        }
    })
    return pole
}