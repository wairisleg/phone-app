import { useState, useEffect } from "react";
import BackIcon from "../assets/images/bek.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://9fc273f2e15859bc.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost();
    }, [id]);    
    


    return (
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src= {BackIcon} alt="back icon"></img>
                    Назад
                </div>
            </Link> 
            <div class="container">
                <div class="element-detail-block">
                    <h3 class="element-card__title">{post.title}</h3>
                    <p class="description">
                       {post.description}
                    </p>
                    <div class="kolodka">
                        <img src= {post.imageUrl} alt={post.title}></img>
                    </div>
                    <button class="teg-button">{post.category}</button>
                </div>
            </div>
        </section>
    );
}

export default PostDetailPage;