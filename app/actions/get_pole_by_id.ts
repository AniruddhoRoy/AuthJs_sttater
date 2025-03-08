"use server"
import db from "@/prisma/db";


export async function Get_Pole_By_Id(id:string)
{
    const pole = await db.pole.findUnique({
        where:{
            id
        },
        include:{
            options:true
        }
    })
    if(!pole){
        return []
    }
    return pole;
}