import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import classes from "./Main.module.css";

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Catigories from "./Catigories/Catigories";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";

import {axiosDefault} from "../Settings/axiosDefault";

function Main(){

    const [data, getData] = useState({});
    const url = 'main_page';
    useEffect(() => {
        getAllData()
    }, []);
    const getAllData = () => {
        axiosDefault.get(url)
            .then((response) => {
                const allData = response.data;
                getData(allData);
            })
            .catch((error) => console.log(error));
    }

        return (
                <div className={classes.container}>
                    {data.popular_categories ? <Header data={data.popular_categories}/> : null}
                    <Switch>
                        <Route
                            path={'/'}
                            exact
                        >
                            <>
                                {data.main_banners ? <Banner data={data.main_banners}/> : null }
                                {data.popular_categories ? <Catigories data={data.popular_categories}/> : null}
                                <Content data={data}/>
                            </>
                        </Route>
                        <Route
                            path={"/product/:id"}
                            exact
                            component={(props) => <Product {...props} recommend={data.recommends} history={data.history} />}
                        />
                    </Switch>
                    <Footer/>
                </div>
        )

}


export default Main