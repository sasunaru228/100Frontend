import like from "../../../../img/Recomendations/like.svg";
import percent from "../../../../img/Recomendations/percent.svg";
import Stars from "../../../Product/Stars/Stars";
import classes from "./Example.module.css"
import {NavLink} from "react-router-dom";
import AddButton from "../../../Product/AddButton/AddButton";
import React, {useEffect, useState} from "react";
import EditButton from "../../../Product/EditButton/EditButton";


export default function Example(props){

    const [count, setCount] = useState({});

    // useEffect(() => {
    //     if (props.data.product_id !== undefined){
    //         if (localStorage.getItem(props.data.product_id)){
    //             setCount(parseInt(localStorage.getItem(props.data.product_id)))
    //         }
    //     }
    // }, [props.data.product_id])
    //
    // useEffect(() => {
    //     if (props.data.product_id !== undefined && count !== 0){
    //         localStorage.setItem(props.data.product_id, count);
    //     }
    // }, [count])


    const firstValue = (id) => {
        setCount({
            ...count,
            [id]: 1
        })
        localStorage.setItem(id, 1)
    }
    const minus = (id) => {

        if (count[id] !== 1){
            setCount((prevState) => ({
                ...prevState,
                [id] : prevState[id] - 1
            }))
            localStorage.setItem(id, localStorage.getItem(id) - 1)
        }
        else {
            setCount(prevState => ({
                ...prevState,
                [id] : undefined
            }))
            localStorage.removeItem(id)
        }
    }
    const plus = (id) => {
        if (count[id] === 10) return
        setCount((prevState) => ({
            ...prevState,
            [id] : prevState[id] + 1
        }))
        localStorage.setItem(id, Number.parseInt(localStorage.getItem(id)) + 1)


    }

    return(
        <div className={classes.main}>
            {
                props.data.map((main, id) => {
                        return (
                            <NavLink to={{pathname: '/product/' + main.product_id}} className={classes.itemBody} key={id}>
                                <img src={main.img} alt="img"/>
                                <span className={classes.like}>
                                    <img src={like} alt="like" width="24px" height="24px"/>
                                </span>
                                {main.prices['Скидка'] !== undefined ? <ItemRed data={main.prices}/> : <ItemDefault data={main.prices['Обычная цена']}/>}
                                <span className={classes.title}>{main.short_name}</span>

                                <div className={classes.stars}>
                                    <Stars count={id}/>
                                </div>
                                <div className={'sasuNaru'}>
                                    {
                                        count[main.product_id] !== undefined ? <EditButton idx={main.product_id} count={count[main.product_id]} info={props.data} handleChangeMinus={minus} handleChangePlus={plus} /> : <AddButton idx={main.product_id} word={"В корзину"} info={props.data} handleChange={firstValue} />
                                    }
                                </div>
                            </NavLink>
                        )
                    }
                )
            }
        </div>
    )
}

function ItemDefault(props) {
    return(
        <>
            <span className={classes.cost}>
                {props.data} руб.
            </span>
        </>

    )
}
function ItemRed(props) {
    return(
        <>
            <span className={classes.percent}> - {100 - Math.round((props.data['Скидка'] / props.data['Обычная цена']) * 100)}<img src={percent} alt="percent"/></span>
            <div className={classes.redHolder}>
                <span className={classes.costRed}>{Math.round(props.data['Скидка'])} руб.</span>
                <span className={classes.sale}>{Math.round(props.data['Обычная цена'])} руб</span>
            </div>
        </>
    )
}