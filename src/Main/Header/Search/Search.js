import React from "react"
import logo from "./logo.png"
import classes from "./Search.module.css"
import Catalog from "./Catalog/Catalog"
import SearchBox from "./SearchBox/SearchBox"
import Dots from "./Dots/Dots";
import {NavLink} from "react-router-dom";

function Search(props) {
    return (
        <div className={classes.search}>
            <NavLink to={"/"}>
                <img src={logo} alt="logo"/>
            </NavLink>
            <div className={classes.phone}>
                <div>
                    <p>+375 29 </p>
                    <p>+375 33 </p>
                </div>
                <p>690 39 39</p>
            </div>

            <Catalog data={props.data}/>
            <SearchBox/>

            <Dots counter={props.counter}/>
        </div>
    )
}

export default Search

