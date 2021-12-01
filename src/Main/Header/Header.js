import React from "react";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search"


function Header (props) {
    return(
        <>
            <Navigation/>
            <Search data={props.data}/>
        </>
    )
}

export default Header