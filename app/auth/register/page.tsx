"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import {LoginSchema} from "@/schema"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TokenInput } from "@/components/TokenInput"
import { useState } from "react"
import { Login } from "@/app/actions/Auth/login"
import { generateToken } from "@/libs/token"
export default function Home(){
    const {register,formState:{errors},watch,handleSubmit} = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:""
        }
    })
    const email = watch("email")
    
    const [token , setToken] = useState("")
    const [showTokenBox,setShowTokenBox] = useState(false)
    const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
        generateToken(email).then(()=>{

            setShowTokenBox(true);
        }
    ).catch(()=>{
        alert("Something Broken")
    })
    }
    function login(){
        Login(email,token).then((data)=>{
            if(data.err)
            {
                alert(data.err)
            }
            if(data.succ){
                alert(data.succ)
            }
        }).catch((e)=>{
            console.log(e)
            alert("Something Broken While Login")
        })
    }
    return (
        <div className="border px-3 py-5 rounded-md w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] shadow-md shadow-sky-200">
            {!showTokenBox && 
            <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col justify-center items-center gap-4">
                <h3>Enter Your Email</h3>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input type="text" {...register("email")} className="border  w-full rounded-md h-8 pl-3"/>
            <button type="submit" className="border px-3 py-2 rounded-md w-[200px]">Submit</button>
        </form>
            }
            {showTokenBox && 
            <TokenInput setToken={setToken} onsubmit={login}/>
            }
        </div>
    )
}