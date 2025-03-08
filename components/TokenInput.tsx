"use client"
export function TokenInput({setToken,onsubmit}:{setToken:(val:string)=>void,onsubmit:()=>void}){
    return <div className=" flex flex-col justify-center items-center gap-4">
        <p>Enter Verification Token</p>
        <input type="text" onChange={(e)=>setToken(e.target.value)} className="border  w-full rounded-md h-8 pl-3"/>
        <button className="border px-3 py-2 rounded-md w-[200px]" onClick={onsubmit}>Submit</button>
    </div>
}