import home from "../assets/images/home_icon-icons.com_73532.svg";
import breack from "../assets/images/car_brake_parking_icon_135822.svg";
import filter from "../assets/images/094filter_99905.svg";
import akb from "../assets/images/automotive_battery_car_charging_truck_vehicle_icon_123318.svg";
import shid from "../assets/images/liquid-droplet-with-white-detail_icon-icons.com_70688.svg";
import pors from "../assets/images/piston_icon_137300.svg";
import { Link } from "react-router-dom";
import { useState } from "react";


function CategoriesPage() {

    const [categories, setCategories] = useState([])

    return(
        <section class="mobile-block">
        <div class="mobile-block__header-success">
            Категории
        </div>  

        <div class="container">
            <div class="category-row">
                <Link to="/" class="category-item">
                    <img src={home} alt="home" class="category-item__img"></img>
                    <span class="category-item__title">Объявления</span>
                </Link>
                <Link to="/category/posts" class="category-item">
                    <img src={breack} alt="home" class="category-item__img"></img>
                    <span class="category-item__title-tormoz">Тормоза</span>
                </Link>
                <Link to="/category/posts" class="category-item">
                    <img src={filter} alt="home" class="category-item__img"></img>
                    <span class="category-item__title-tormoz">Фильтра</span>
                </Link>
                <Link to="/category/posts" class="category-item">
                    <img src={akb} alt="home" class="category-item__img"></img>
                    <span class="category-item__title-tormoz">АКБ</span>
                </Link>
                <Link to="/category/posts" class="category-item">
                    <img src={shid} alt="home" class="category-item__img"></img>
                    <span class="category-item__title-tormoz">Жидкости</span>
                </Link>
                <Link to="/category/posts" class="category-item">
                    <img src={pors} alt="home" class="category-item__img"></img>
                    <span class="category-item__title-pors">Поршневая</span>
                </Link>


            </div>
        </div>

    </section>
    );
}

export default CategoriesPage;