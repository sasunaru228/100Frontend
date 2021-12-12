import {NavLink} from "react-router-dom";
import dot1 from "../../../../img/dot1.svg"
import dot2 from "../../../../img/dot2.svg"
import dot3 from "../../../../img/dot3.svg"
import classes from "./Dots.module.css";
import {useEffect, useState} from "react";





function Dots() {
    const [count, setCount] = useState(0);
    document.addEventListener('click', () => {
        setTimeout(() => {
            console.log(localStorage.length)
            setCount(localStorage.length)
        }, 0)


    })
    useEffect(() => {
        if (localStorage.length > 0){
            setCount(localStorage.length)
        }
        else {
            setCount(0)
        }

    }, [])

    return(
        <div className={classes.dots}>
            <NavLink to="">
                <img src={dot1} alt="dot1" width="24" height="24"/>
            </NavLink>
            <NavLink to="">
                <img src={dot2} alt="dot2" width="24" height="24"/>
            </NavLink>
            <NavLink to="/basket">
                <img src={dot3} alt="dot3" width="24" height="24"/>
                {count > 0 ? <span className={classes.counter}>{count}</span> : null}
            </NavLink>
        </div>
    )
}


export default Dots