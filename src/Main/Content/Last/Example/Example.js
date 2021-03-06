import like from "../../../../img/Recomendations/like.svg";
import percent from "../../../../img/Recomendations/percent.svg";
import Stars from "../../../Product/Stars/Stars";
import classes from "./Example.module.css"
import {NavLink} from "react-router-dom";
import AddButton from "../../../Product/AddButton/AddButton";
import React, {useEffect, useState} from "react";
import EditButton from "../../../Product/EditButton/EditButton";
import data from "bootstrap/js/src/dom/data";


export default function Example(props){

    const [count, setCount] = useState({});


    useEffect(() => {
        props.data.forEach((item) => {
            if (localStorage.getItem(item.product_id)){
                setCount(prevState => ({
                    ...prevState,
                    [item.product_id]: localStorage.getItem(item.product_id)
                }))
            }
        })
    }, [])

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
                                {main.prices['????????????'] !== undefined ? <ItemRed data={main.prices}/> : <ItemDefault data={main.prices['?????????????? ????????']}/>}
                                <span className={classes.title}>{main.short_name}</span>

                                <div className={classes.stars}>
                                    <Stars count={id}/>
                                </div>
                                <div className={'sasuNaru'}>
                                    {
                                        count[main.product_id] !== undefined ? <EditButton idx={main.product_id} count={count[main.product_id]} info={props.data} handleChangeMinus={minus} handleChangePlus={plus} /> : <AddButton idx={main.product_id} word={"?? ??????????????"} info={props.data} handleChange={firstValue} />
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
                {props.data} ??????.
            </span>
        </>

    )
}
function ItemRed(props) {
    return(
        <>
            <span className={classes.percent}> - {100 - Math.round((props.data['????????????'] / props.data['?????????????? ????????']) * 100)}<img src={percent} alt="percent"/></span>
            <div className={classes.redHolder}>
                <span className={classes.costRed}>{Math.round(props.data['????????????'])} ??????.</span>
                <span className={classes.sale}>{Math.round(props.data['?????????????? ????????'])} ??????</span>
            </div>
        </>
    )
}