import { Link } from "react-router-dom";

function NotFound(){

    return (
    <>
        <div className="grid place-items-center h-screen w-full bg-black"> 
        <h1 className=" text-white font-bold text-3xl">!! 404-Not Found !!</h1>
        <h2 className=" w-fit rounded bg-white text-black p-2 mt-1 "><Link to={'/'}>GO HOME</Link></h2>
        </div>
    </>
    )
}

export default NotFound;