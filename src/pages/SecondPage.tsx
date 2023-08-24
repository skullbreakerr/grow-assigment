import { useState, useEffect } from "react";
import { Fetcher } from "../Fetcher";
import Content from "../Components/Content";
import { Post } from "../model"; // Import the Post model

function SecondPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const userDetailsString = localStorage.getItem("userDetails");
    const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Fetcher('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data); // Assuming response is of { errorMessage: string, data: Post[] }
                console.log("Fetcher working !!");
            } catch (error) {
                // Handle error
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="fixed">
            <h1 className="my-2 ml-[1vw] font-bold text-2xl">Welcome, {userDetails?.fullname || 'Guest'}</h1>
            </div>
            <div className=" grid place-content-center h-screen w-screen text-2xl font-bold">
              <Content posts={posts} />
            </div>
        </>
    )
}

export default SecondPage;