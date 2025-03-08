import { Create_User } from "@/app/actions/create_user";
import { auth } from "@/auth";
import {faker} from "@faker-js/faker"
export default async function Home(){
    const session = await auth()
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}