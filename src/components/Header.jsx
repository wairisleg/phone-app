import categoryIcon from "../assets/images/icons8-меню (1).svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container"> 
                <Link to="/categories" class="btn-category">
                    <img src={categoryIcon} alt="menu button" />
                        <span class="home">
                        <h1>Главная</h1>
                    </span>
                </Link>
            </div>
        </header>
    )
}
export default Header;