import React, {useEffect, useState} from "react";
import {axiosDefault} from "../../Settings/axiosDefault";
import {NavLink} from "react-router-dom";
import Stars from "./Stars/Stars";
import Recomendations from "../Content/Recomendations/Recomendations";
import Example from "../Content/Last/Example/Example";
import AddButton from "./AddButton/AddButton";
import EditButton from "./EditButton/EditButton";
import Price from "./Price/Price";
import SpecificarionsMain from "./SpecificarionsMain/SpecificarionsMain";
import SpecificarionsTab from "./SpecificarionsTab/SpecificarionsTab";
import 'flickity-as-nav-for'


import {Row, Col, Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Product.module.css";
import './SUKA.css'

import want from '../../img/wantCheaper.svg'
import like from '../../img/Product/like.svg'
import compare from '../../img/Product/compare.svg'
import toShare from '../../img/Product/toShare.svg'
import arrow from '../../img/Product/arrow.svg'
import percent from '../../img/Product/percent.svg'
import isHere from '../../img/Product/isHere.svg'
import saled from '../../img/Product/saled.svg'
import addG from '../../img/Product/addG.svg'
import help from '../../img/Product/help.svg'
import delivery from '../../img/Product/delivery.svg'
import deliveryNew from '../../img/Product/deliveryNew.svg'
import logo from '../../img/Product/logo.svg'
import Flickity from "react-flickity-component";
import styled from "styled-components";


const ImgMain = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  img {
    object-fit: contain;
    width: 100%;
    height: 400px;
  }
`

const ImgNav = styled.img`
  width: 172px;
  height: 134px;
  object-fit: fill;
  margin: 20px 8px 0 8px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`

export default function Product(props) {

    const [data, getData] = useState({});
    useEffect(() => {
        const url = 'products/' + props.match.params.id;
        axiosDefault.get(url)
            .then((response) => {
                const allData = response.data;
                getData(allData);
            })
            .catch((error) => console.log(error));
    }, []);


    const [count, setCount] = useState(0);

    useEffect(() => {
        if (data.product_id !== undefined) {
            if (localStorage.getItem(data.product_id)) {
                setCount(parseInt(localStorage.getItem(data.product_id)))
            }
        }
    }, [data.product_id])

    useEffect(() => {
        if (data.product_id !== undefined && count !== 0) {
            localStorage.setItem(data.product_id, count);
        }
    }, [count])
    const firstValue = () => {
        setCount(1)
    }
    const minus = () => {
        if (count !== 1) {
            setCount(count - 1)
        } else {
            setCount(0)
            localStorage.removeItem(data.product_id)
        }
    }
    const plus = () => {
        if (count === 10) return
        setCount(parseInt(count) + 1)
    }
    // useEffect(() => {
    //      props.setCounter(localStorage.length)
    // }, [])

    if ((data.prices && props.history) !== undefined) {
        return (
            <div className={classes.holder}>
                <div className={classes.nav}>
                    <span>
                        <NavLink to={'/'}>
                            ??????????????
                        </NavLink>
                    </span>
                    <span className={classes.arrow}>
                        <img src={arrow} alt="arrow"/>
                    </span>
                    <span>
                        <NavLink to={''}>
                            ????????????
                        </NavLink>
                    </span>
                    <span className={classes.arrow}>
                        <img src={arrow} alt="arrow"/>
                    </span>
                    <span>
                        <NavLink to={''}>
                            ??????????????????
                        </NavLink>
                    </span>
                    <span className={classes.arrow}>
                        <img src={arrow} alt="arrow"/>
                    </span>
                    <span>
                        <NavLink to={''}>
                            ??????????
                        </NavLink>
                    </span>
                </div>
                <div className={classes.saleDot}>
                    {
                        data.prices['????????????'] ? <span>
                                                    - {100 - Math.round((data.prices['????????????'] / data.prices['?????????????? ????????']) * 100)}
                                <img src={percent} alt="percent"/>
                                                </span>
                            : null
                    }

                    <span className={classes.bestSell}>
                        ????????????????????
                    </span>
                </div>
                <div className={classes.mainName}>
                    {data.full_name}
                </div>
                <div className={classes.share}>
                    <Stars count={4}/>
                    <div className={classes.response}>
                        159 ??????????????
                    </div>
                    <div className={classes.like}>
                        <img src={like} alt="like"/>
                        ?? ??????????????????
                    </div>
                    <div className={classes.toCompare}>
                        <img src={compare} alt="compare"/>
                        ?? ??????????????????
                    </div>
                    <div className={classes.toShare}>
                        <img src={toShare} alt="toShare"/>
                        ????????????????????
                    </div>
                </div>
                <div className={classes.mainInfo}>
                    <Row>
                        <Col lg={5} className={classes.gallery}>
                            <Flickity
                                className={'carousel carousel-main'}
                                elementType={'div'}
                                options={{
                                    prevNextButtons: false,
                                    pageDots: false,
                                    contain: true,
                                }}
                                disableImagesLoaded={false}
                                reloadOnUpdate
                            >
                                {
                                    data?.imgs?.map(item => <ImgMain>
                                        <img src={item} alt=""/>
                                    </ImgMain>)
                                }
                            </Flickity>
                            <Flickity
                                className={'carousel carousel-nav'}
                                options={{
                                    asNavFor: '.carousel-main',
                                    contain: true,
                                    pageDots: false,
                                    prevNextButtons: false
                                }}>
                                {
                                    data?.imgs?.map(item => <ImgNav src={item} alt=""/>)
                                }
                            </Flickity>
                        </Col>
                        <Col lg={4} className={classes.description}>
                                <span>
                                    <img src={logo} alt="logo"/>
                                </span>
                            <span className={classes.article}>
                                    ??????????????: {data.product_id}
                                </span>

                            <SpecificarionsMain params={data.params}/>

                            <span className={classes.fullDescription}>
                                    ???????????? ????????????????
                                </span>
                            <span className={classes.imp}>
                                    {data.short_description ? data.short_description : null}
                                </span>
                        </Col>
                        <Col lg={3} className={classes.price} id="clicker">
                            {data.prices['????????????'] !== undefined ? <Price data={data}/> :
                                <span className={classes.cost}>{data.prices['?????????????? ????????']} ??????.</span>}
                            <span className={classes.isHere}><img src={isHere} alt="isHere"/> ?? ??????????????</span>
                            <span className={classes.saled}><img src={saled} alt="saled"/> ???????????? ?? ???????????????? ????????</span>
                            <hr className={classes.hr}/>
                            <span className={classes.addG}><img src={addG}
                                                                alt="addG"/> ???????????? ???????????????????????????? ????????????????</span>
                            {
                                count !== 0 ? <EditButton count={count} info={data} handleChangeMinus={minus}
                                                          handleChangePlus={plus}/> :
                                    <AddButton word={"???????????????? ?? ??????????????"} info={data} handleChange={firstValue}/>
                            }
                            <span className={classes.wantCheaper}><img src={want} alt="want"/>???????? ??????????????</span>
                            <span className={classes.help}><img src={help} alt="help"/>?????????? ????????????????????????</span>
                            <span className={classes.delivery}><img src={delivery} alt="delivery"/>?????????????????????? ????????????????</span>
                            <span className={classes.deliveryNew}>
                                    <span className={classes.first}>
                                        <img src={deliveryNew} alt="delivery"/>
                                        <span className={classes.holder}>
                                            <span className={classes.one}>???????????????? ????????????????</span>
                                        </span>
                                    </span>
                                    <span className={classes.two}>10 ???????????????? - ??????????????????</span>
                                    <span className={classes.one}>???????????? ???????????????????? <br/>
                                        <span className={classes.two}>10 ???????????????? - ??????????????????</span>
                                    </span>
                                </span>
                        </Col>
                    </Row>
                </div>
                <div className={classes.tab}>
                    <Tabs
                        defaultActiveKey="Description"
                    >
                        <Tab title="???????????????? ?? ????????????????????????????" eventKey="Description" tabClassName={classes.tabItem}>
                            <SpecificarionsTab params={data.params}/>
                        </Tab>

                        <Tab title="????????????????????" eventKey="Accessories" tabClassName={classes.tabItem}>
                            <p>Accessories</p>
                        </Tab>

                        <Tab title="????????????????????" eventKey="Manual" tabClassName={classes.tabItem}>
                            <p>Manual</p>
                        </Tab>

                        <Tab title="??????????" eventKey="Overview" tabClassName={classes.tabItem}>
                            <p>Overview</p>
                        </Tab>

                        <Tab title="????????????" eventKey="Reviews" tabClassName={classes.tabItem}>
                            <p>Reviews</p>
                        </Tab>

                    </Tabs>
                </div>

                <div className={classes.analogs}>
                    <div className={classes.holder}>
                        <span>?????????????? ??????????????</span>
                        <Example data={props.history}/>
                    </div>
                    <div className={classes.holder}>
                        <span>???? ????????????????</span>
                        <Example data={props.history}/>
                    </div>
                </div>
                <div>
                    {props.recommend.length > 0 ? <Recomendations data={props.recommend}/> : null}
                </div>
            </div>
        )
    }
    return null


}