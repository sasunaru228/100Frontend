import like from "../../../../img/Recomendations/like.svg";
import percent from "../../../../img/Recomendations/percent.svg";
import Stars from "../../../Product/Stars/Stars";
import classes from "./Example.module.css"
import {NavLink} from "react-router-dom";


export default function Example(props){
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
                                <span className={classes.button}>В корзину</span>
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