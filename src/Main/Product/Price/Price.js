import classes from "./Price.module.css"

export default function Price(props){
    return (
        <span className={classes.holder}>
            <span className={classes.redPrice}>{props.data.prices['Скидка']} руб.</span>
            <span className={classes.blackPrice}>{props.data.prices['Обычная цена']} руб.</span>
        </span>
    )
}