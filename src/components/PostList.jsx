import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios"

function PostList() {

    const [posts, setPosts] =useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://9fc273f2e15859bc.mokky.dev/post');
                setPosts(response.data)
            } catch(error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);


    return(
        <div class="all-element-block">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;