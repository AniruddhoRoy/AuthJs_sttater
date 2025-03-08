export default async function layout({children}:{children:React.ReactNode})
{
    return <div className="h-screen w-screen flex justify-center items-center">
        {children}
    </div>
}