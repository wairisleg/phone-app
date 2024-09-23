import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";
import PostCard from "../components/PostCard";

function PostsByCategoryPage () {

    const {id} = useParams ();
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts]=useState([]);


    useEffect(()=> {
        async function fetchCategory() {
            try{
                const response = await axios.get(`https://9fc273f2e15859bc.mokky.dev/categoty${id}`);
                setCategory(response.data);
            } catch(e) {
                console.log(e);
            } 
        }

        async function fetchPost() {
        }
        fetchPost();
        fetchCategory()
    },[id]);


    return(        
        <section class="mobile-block">
            <div class="mobile-block__header-success">
                {category.name}
            </div>

            <div class="all-element-block">
                {isLoading? (<LoadingPost/>) : (
                    <>
                        {posts.map((post)=>{
                            return post.category===category.name ? (
                                <PostCard key={post.id}post={post} />
                            ) : null
                        })}
                    </>
                )}
            </div>



        </section>
    );
}

export default PostsByCategoryPage;