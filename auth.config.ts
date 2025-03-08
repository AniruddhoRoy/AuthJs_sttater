import Credential from "next-auth/providers/credentials";
import { Find_User } from "./app/actions/find_user";
import { Find_Token_By_Email } from "./app/actions/find_token_by_email";
import { NextAuthConfig } from "next-auth";
import { Create_User } from "./app/actions/create_user";


export default {
    providers:[
        Credential({
             authorize:async(credentials)=>{
                const user = await Find_User(credentials.email as string)
                const token = await Find_Token_By_Email(credentials.email as string)
                if(!token)
                    {
                        return null;
                    }
                    if(credentials.token != token.token )
                        {
                            return null;
                        }
                        if(!user){
                            const user =await Create_User("Not Set",credentials.email as string)
                            return user
                        }else{
                            
                            console.log(user)
                    return user
                }
            }
        })
    
    ]} satisfies NextAuthConfig