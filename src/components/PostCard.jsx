import { Link } from "react-router-dom";


function PostCard({post}) {
    return (
            <Link to={`/post/${post.id}`} class="element-card">
                <div class="container">
                    <h3 class="element-card__title">{post.title}</h3>
                    <span class="element-card__category">{post.category}</span>
                </div>
            </Link>
    );


}

export default PostCard;
