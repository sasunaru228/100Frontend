import {NavLink} from "react-router-dom";

import classes from "./EditButton.module.css";
import like from "../like.svg"
import minus from "./minus.svg"
import plus from "./plus.svg"

export default function EditButton(props){
    return(
        <span className={classes.holder}>
            <NavLink to="/basket">
                <span className={classes.first}>
                    <span>В корзине</span>
                    <span>Перейти</span>
                </span>
            </NavLink>
            <span className={classes.main}>
                <span className={classes.sign} onClick={props.handleChangeMinus}>
                    <img src={minus} alt="minus"/>
                </span>
                <span className={classes.count}>{props.count}</span>
                <span className={classes.sign} onClick={props.handleChangePlus}>
                    <img src={plus} alt="plus"/>
                </span>
            </span>
            <span className={classes.last}>
                <img src={like} alt="like"/>
            </span>
        </span>
    )
}