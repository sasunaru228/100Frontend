import React from "react";
import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import svg1 from "../../../img/Navigation/cities.svg"


let choice = {
    "city": ["Минск", "Москва", "Спб"]
}

function Navigation () {
        const [category, setCategory] = React.useState('');

        const handleCategoryChange = (category) => {
            setCategory(category);
        }
        return (
            <div className={classes.main}>
                <div className={classes.cities}>
                    <img src={svg1} width="12.35" height="15" alt="dot" />
                    <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                        {choice.city.map((city,id) => {
                            return <option value={city} key={id}>{city}</option>
                        })}
                    </select>
                </div>
                <div className={classes.navigation}>
                        <NavLink to="">О магазине</NavLink>
                        <NavLink to="">Рассрочка</NavLink>
                        <NavLink to="">Способы оплаты</NavLink>
                        <NavLink to="">Гарантия</NavLink>
                        <NavLink to="">Доставка и самовывоз</NavLink>
                        <NavLink to="">Контакты</NavLink>
                </div>
            </div>
        )
}

export default Navigation