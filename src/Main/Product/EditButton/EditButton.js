import {NavLink} from "react-router-dom";

import like from "../../../img/Product/like.svg"
import minus from "../../../img/EditButton/minus.svg"
import plus from "../../../img/EditButton/plus.svg"

export default function EditButton(props){
    return(
        <span className={'holder'}>
            <NavLink to="/basket">
                <span className={'first'}>
                    <span>В корзине</span>
                    <span>Перейти</span>
                </span>
            </NavLink>
            <span className={'main'}>
                <span className={'sign'} onClick={(e) => {
                    props.handleChangeMinus(props.idx)
                    e.preventDefault()
                }}>
                    <img src={minus} alt="minus"/>
                </span>
                <span className={'count'}>{props.count}</span>
                <span className={'sign'} onClick={(e) => {
                    props.handleChangePlus(props.idx)
                    e.preventDefault()
                }}>
                    <img src={plus} alt="plus"/>
                </span>
            </span>
            <span className={'last'}>
                <img src={like} alt="like"/>
            </span>
        </span>
    )
}