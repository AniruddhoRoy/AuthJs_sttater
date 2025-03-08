import { Create_Options } from "@/app/actions/create_options";
import { Create_Pole } from "@/app/actions/create_pole";
import { Get_Pole_By_Id } from "@/app/actions/get_pole_by_id";
import db from "@/prisma/db";

export default async function home(){

    const pole = await Create_Pole("Testing Pole",[]);
    const option1 = await Create_Options("Option Title",pole.id)
    const option2 = await Create_Options("Option Title-2",pole.id)
    const updated_pole =await db.pole.update({
        where:{
            id:pole.id
        },
        data:{
            options:{
               connect:[option1,option2]
        }}
    })
    return <div>
        {JSON.stringify(await Get_Pole_By_Id(updated_pole.id))}
    </div>

}