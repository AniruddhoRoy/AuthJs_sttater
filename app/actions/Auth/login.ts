"use server"


import { signIn } from "@/auth"
import { Create_User } from "../create_user"
import { Find_Token_By_Email } from "../find_token_by_email"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export async function Login(email:string,token:string) {
        const user = await Find_Token_By_Email(email)
        const existing_token = await Find_Token_By_Email(email)
        if(!existing_token)
        {
            return {succ:"Verification Token send"}
        }
        if(token!=existing_token.token)
        {
            return {err:"Invalid Token"}
        }
        if(!user)
        {
            await Create_User("Not Set",email);
        }
        await signIn("credentials",{email,token,redirectTo:DEFAULT_LOGIN_REDIRECT})
        return {succ:"Login Successfull"}
}