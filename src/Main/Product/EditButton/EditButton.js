import classes from "./EditButton.module.css";

export default function EditButton(props){
    return(
        <span className={classes.holder}>
            <span>
                корзина
            </span>
            <span>
                <span onClick={props.handleChangeMinus}>    -      </span>
                {props.count}
                <span onClick={props.handleChangePlus}>     +      </span>
            </span>
            <span>
                like
            </span>
        </span>
    )
}