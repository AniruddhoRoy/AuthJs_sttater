"use server"

import db from "@/prisma/db";

function generateRandomToken(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
  
    return token;
  }
  
export async function generateToken(email:string){
    await db.token.deleteMany({
        where:{
            userEmail:email
        }
    })
    const token = await db.token.create({
        data:{
            userEmail:email,
            token:generateRandomToken(),
            expair:new Date(new Date().getTime() +3600 * 1000)
        }
    })
    return token
}