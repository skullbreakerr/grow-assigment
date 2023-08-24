import { useState} from 'react';
import { Link } from 'react-router-dom';
function Form(){
    // const [Error,setError] = useState([]);
    const [fullname,setFullName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
     

    function handleSubmit (){
        const userDetails= {fullname,phoneNumber,email};
        localStorage.setItem('userDetails',JSON.stringify(userDetails));
    }
    

    return(
        <>
        <div className='grid place-content-center h-screen w-screen '>
            <form onSubmit={handleSubmit} className=" flex flex-col shadow-xl border-t-4 rounded-lg border-blue-600 p-[1vw]">
                <h1 className="mt-[1vw] mb-[1vw]  text-black font-bold text-[2vh]">Register</h1>
                <input type="text" value={fullname} onChange={(e)=> setFullName(e.target.value)} placeholder="Full Name" required/>
                <input type="int" value={phoneNumber}  onChange={(e)=> setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail" required/>
                <div className=" hidden bg-red-500 text-white font-normal p-2 w-fit mb-3 rounded-md">{}</div>
                <button  type="submit"className="my-2 bg-blue-600 flex justify-center items-center rounded-md"><Link to={'/second-page'} >Register</Link></button>
            </form>
        </div>
        </>
    )
} 


export default Form;