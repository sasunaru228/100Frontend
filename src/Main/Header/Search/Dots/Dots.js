import {NavLink} from "react-router-dom";
import dot1 from "./dot1.svg"
import dot2 from "./dot2.svg"
import dot3 from "./dot3.svg"
import classes from "./Dots.module.css";

function Dots() {
    return(
        <div className={classes.dots}>
            <NavLink to="">
                <img src={dot1} alt="dot1" width="24" height="24"/>
            </NavLink>
            <NavLink to="">
                <img src={dot2} alt="dot2" width="24" height="24"/>
            </NavLink>
            <NavLink to="">
                <img src={dot3} alt="dot3" width="24" height="24"/>
            </NavLink>
        </div>
    )
}

export default Dots