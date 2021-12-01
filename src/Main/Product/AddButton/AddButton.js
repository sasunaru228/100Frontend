import classes from "../Product.module.css"

export default function AddButton (props){
    return(
        <span
            className={classes.greyBox}
            onClick={props.handleChange}
        >
            Добавить в корзину
        </span>
    )
}