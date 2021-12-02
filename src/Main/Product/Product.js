import React, {useEffect, useState} from "react";
import {axiosDefault} from "../../Settings/axiosDefault";
import {NavLink} from "react-router-dom";
import Stars from "./Stars/Stars";
import Recomendations from "../Content/Recomendations/Recomendations";
import Example from "../Content/Last/Example/Example";
import Description from "./Description/Description";
import AddButton from "./AddButton/AddButton";
import EditButton from "./EditButton/EditButton";

import {Row, Col, Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Product.module.css";
import './SUKA.css'


import like from './like.svg'
import compare from './compare.svg'
import toShare from './toShare.svg'
import arrow from './arrow.svg'
import percent from './percent.svg'
import isHere from './isHere.svg'
import saled from './saled.svg'
import addG from './addG.svg'
import help from './help.svg'
import delivery from './delivery.svg'
import deliveryNew from './deliveryNew.svg'
import logo from './logo.svg'

//delete this ->
import imp from './imp.png'
import desc from './desc.png'
//






export default function Product(props){

    const [data, getData] = useState({});
    const url = 'products/' + props.match.params.id;
    useEffect(() => {
        const getAllData = async () => {
            await axiosDefault.get(url)
                .then((response) => {
                    const allData = response.data;
                    getData(allData);
                })
                .catch((error) => console.log(error));
        }
        getAllData()
    }, [url]);


    const [count, setCount] = useState(0);
    useEffect(() => {
        if (data.product_id !== undefined){
            if (localStorage.getItem(data.product_id)){
                setCount(parseInt(localStorage.getItem(data.product_id)))
            }
        }
    }, [data.product_id])
    useEffect(() => {
        if (data.product_id !== undefined && count !== 0){
            localStorage.setItem(data.product_id, count);
        }
    },)
    const firstValue = () => {
       setCount(1)
    }
    const minus = () => {
        if (count !== 1){
            setCount(count - 1)
        }
        else {
            setCount(0)
            localStorage.removeItem(data.product_id)
        }
    }
    const plus = () => {
        setCount(parseInt(count) + 1)
    }
    useEffect(() => {
        props.setCounter(localStorage.length)
    }, [count])
    //////// если что-то идет не так, попробовать удалить в зависимости props
    
    if ((data.prices && props.history) !== undefined){
        return(
            <div className={classes.holder}>
                <div className={classes.nav}>
                <span>
                    <NavLink to={'/'}>
                        Главная
                    </NavLink>
                </span>
                    <span className={classes.arrow}>
                    <img src={arrow} alt="arrow"/>
                </span>
                    <span>
                    <NavLink to={''}>
                        Раздел
                    </NavLink>
                </span>
                    <span className={classes.arrow}>
                    <img src={arrow} alt="arrow"/>
                </span>
                    <span>
                    <NavLink to={''}>
                        Подраздел
                    </NavLink>
                </span>
                    <span className={classes.arrow}>
                    <img src={arrow} alt="arrow"/>
                </span>
                    <span>
                    <NavLink to={''}>
                        Товар
                    </NavLink>
                </span>
                </div>
                <div className={classes.saleDot}>
                    <span>
                        {100 - Math.round((data.prices['Скидка'] / data.prices['Обычная цена']) * 100)}
                        <img src={percent} alt="percent"/>
                    </span>
                    <span>
                        Бестселлер
                    </span>
                </div>
                <div className={classes.mainName}>
                    {data.full_name}
                </div>
                <div className={classes.share}>
                    <Stars count={4}/>
                    <div className={classes.response}>
                        159 отзывов
                    </div>
                    <div className={classes.like}>
                        <img src={like} alt="like"/>
                        В избранное
                    </div>
                    <div className={classes.toCompare}>
                        <img src={compare} alt="compare"/>
                        В сравнение
                    </div>
                    <div className={classes.toShare}>
                        <img src={toShare} alt="toShare"/>
                        Поделиться
                    </div>
                </div>
                <div className={classes.mainInfo}>
                        <Row>
                            <Col lg={5} className={classes.gallery}>

                            </Col>
                            <Col lg={4} className={classes.description}>
                                <span>
                                    <img src={logo} alt="logo"/>
                                </span>
                                <span className={classes.article}>
                                    Артикул: {data.product_id}
                                </span>
                                <span className={classes.mainDescription}>
                                    <img src={desc} alt="desc"/>
                                </span>
                                <span className={classes.fullDescription}>
                                    Полное описание
                                </span>
                                <span className={classes.imp}>
                                    <img src={imp} alt="imp"/>
                                </span>
                            </Col>
                            <Col lg={3} className={classes.price}>
                                <span className={classes.cost}>{data.prices['Обычная цена']} руб.</span>
                                <span className={classes.isHere}><img src={isHere} alt="isHere"/> В наличии</span>
                                <span className={classes.saled}><img src={saled} alt="saled"/> Узнать о снижении цены</span>
                                <hr className={classes.hr}/>
                                <span className={classes.addG}><img src={addG} alt="addG"/> Купить дополнительную гарантию</span>
                                {
                                    count !== 0 ? <EditButton count={count} info={data} handleChangeMinus={minus} handleChangePlus={plus} /> : <AddButton info={data} handleChange={firstValue} />
                                }


                                <span className={classes.greyBox}>Хочу дешевле</span>
                                <span className={classes.help}><img src={help} alt="help"/>Нужна консультация</span>
                                <span className={classes.delivery}><img src={delivery} alt="delivery"/>Стандартная доставка</span>
                                <span className={classes.deliveryNew}>
                                    <span className={classes.first}>
                                        <img src={deliveryNew} alt="delivery"/>
                                        <span className={classes.holder}>
                                            <span className={classes.one}>Курьером партнера</span>
                                        </span>
                                    </span>
                                    <span className={classes.two}>10 сентября - бесплатно</span>
                                    <span className={classes.one}>Пункты самовывоза <br/>
                                        <span className={classes.two}>10 сентября - бесплатно</span>
                                    </span>
                                </span>
                            </Col>
                        </Row>
                </div>

                <div className={classes.tab}>
                    <Tabs
                        defaultActiveKey="Description"
                    >
                        <Tab title="Описание и характеристики" eventKey="Description" tabClassName={classes.tabItem}>
                            <Description/>
                        </Tab>
                        <span>kkk</span>

                        <Tab title="Аксессуары" eventKey="Accessories" tabClassName={classes.tabItem}>
                            <p>Accessories</p>
                        </Tab>

                        <Tab title="Инструкция" eventKey="Manual" tabClassName={classes.tabItem}>
                            <p>Manual</p>
                        </Tab>

                        <Tab title="Обзор" eventKey="Overview" tabClassName={classes.tabItem}>
                            <p>Overview</p>
                        </Tab>

                        <Tab title="Отзывы" eventKey="Reviews" tabClassName={classes.tabItem}>
                            <p>Reviews</p>
                        </Tab>

                    </Tabs>
                </div>

                <div className={classes.analogs}>
                    <div className={classes.holder}>
                        <span>Аналоги дешевле</span>
                        <Example history={props.history}/>
                    </div>
                    <div className={classes.holder}>
                        <span>Вы смотрели</span>
                        <Example history={props.history}/>
                    </div>
                </div>
                <div>
                    <Recomendations data={props.recommend}/>
                </div>
            </div>
        )
    }
    return null


}