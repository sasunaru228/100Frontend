import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import classes from "./Main.module.css";

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Catigories from "./Catigories/Catigories";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";
import Basket from "./Basket/Basket";

import {axiosDefault} from "../Settings/axiosDefault";

function Main(){
    const [counter, setCounter] = useState(0);

    const [data, getData] = useState({});
    const url = 'main_page';
    useEffect(() => {
        setCounter(localStorage.length)
        const getAllData = () => {
            axiosDefault.get(url)
                .then((response) => {
                    const allData = response.data;
                    getData(allData);
                })
                .catch((error) => console.log(error));
        }
        getAllData()
    }, []);






        return (
                <div className={classes.container}>
                    {data.popular_categories ? <Header counter={counter} data={data.popular_categories}/> : null}
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
                            component={(props) => <Product {...props} setCounter={setCounter} recommend={data.recommends} history={data.history} />}
                        />
                        <Route
                            path={"/basket"}
                            exact
                            component={() => <Basket recomendations={data.recommends}/>}
                        />
                    </Switch>
                    <Footer/>
                </div>
        )

}


export default Main