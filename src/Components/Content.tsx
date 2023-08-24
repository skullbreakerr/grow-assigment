import React from "react";
import { Post } from "../model"; // Import the Post model

interface ContentProps {
    posts: Post[];
}

const Content: React.FC<ContentProps> = ({ posts }) => {
    return (
        <div className=" top-[900%] grid flex-row place-content-center h-screen w-screen p-[4vw] gap-3 bg-red-400">
            {posts.map((post) => (
                <div key={post.id} className="relative">
                    <h3>{post.userId}</h3>
                    <h3>{post.id}</h3>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>
            ))}
        </div>
    );
}

export default Content;
