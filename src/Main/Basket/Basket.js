import classes from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import arrow from "../Product/arrow.svg";
import Recomendations from "../Content/Recomendations/Recomendations";
import {useEffect, useState} from "react";
import {axiosDefault} from "../../Settings/axiosDefault";

export default function Basket(props){

    const [data, setData] = useState([]);
    useEffect(() => {
            for (let i = 0; i < localStorage.length; i++){
                const id = localStorage.key(i);
                const count = localStorage.getItem(localStorage.key(i))
                const url = 'products/' + id;
                axiosDefault.get(url).then((response) => {
                    setData(prevState => [
                        ...prevState,
                        {
                            'id': id,
                            'count' : count,
                            'data' : response.data
                        }
                    ])
                })
            }
    }, [])
    console.log(data)


    const [auxInfo, setAuxInfo] = useState({})
    useEffect(() => {
        if (data.length > 0){

            const fullPrice = () => {
                let value = 0;
                data.forEach((item) => {
                    value += Number.parseFloat(item.data.prices['Обычная цена']) * item.count;
                })
                return Math.floor(value * 100) / 100
            }

            const salePrice = () => {
                let value = 0;
                data.forEach((item) => {
                    if (item.data.prices['Скидка'] !== undefined || item.data.prices['Скидка'] === 0){
                        value += Number.parseFloat(item.data.prices['Скидка']) * item.count;
                    }
                })
                return Math.floor(value * 100) / 100
            }
            const totalPrice = () => {
                let value1 = 0, value2 = 0;
                data.forEach((item) => {
                    value1 += Number.parseFloat(item.data.prices['Обычная цена']) * item.count;
                    if (item.data.prices['Скидка'] !== undefined || item.data.prices['Скидка'] === 0){
                        value2 += Number.parseFloat(item.data.prices['Скидка']) * item.count;
                    }
                })
                return Math.floor((value1 - value2) * 100) / 100
            }
            setAuxInfo({
                'fullPrice' : fullPrice(),
                'salePrice' : salePrice(),
                'totalPrice' : totalPrice()
            })
        }
    }, [data])




    return(
        <div className={classes.basket}>
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
                    <NavLink to={'/basket'}>
                        Корзина
                    </NavLink>
                </span>
            </div>
            <span className={classes.heading}>Корзина</span>

            <div className={classes.main}>

                <div className={classes.basketInfo}>
                    <form>
                        <input type="checkbox"/>
                        <button type="button" className={classes.selectAll}>Выбрать всё</button>
                        <button type="submit" className={classes.deleteAll}>Удалить выбранные</button>
                    </form>
                    <hr/>
                    {
                        data !== undefined ? data.map((item, index) => {
                            return (
                                <div className={classes.bItem} key={index}>
                                    <div className={classes.bItem__into}>
                                        <input type="checkbox"/>
                                        <img src={item.data.imgs[0]} alt="bItem"/>
                                        <div className={classes.bItem__into__group}>
                                            <span className={classes.holder}>
                                                <span>{item.data.full_name}</span>
                                                <span>Характеристики товара: цвет, вид, вес</span>
                                                <span>{item.data.manufacturer}</span>
                                            </span>
                                            <span className={classes.like}>В избранное</span>
                                        </div>
                                        <div className={classes.numbers}>
                                            <span className={classes.totalP}>{item.data.prices['Скидка']} руб.</span>
                                            <span className={classes.fullP}>32.00 руб.</span>
                                            <span className={classes.saleP}>2.00 руб.</span>
                                        </div>
                                        <select className={classes.counter} name="count" id="count">
                                            <option value="2">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        }): null
                    }

                </div>

                <div className={classes.sum}>
                    <span className={classes.weight}>
                        <span>Ваша корзина</span>
                        <span>{data.length} товара на (1.42 кг)</span>
                    </span>

                    <span className={classes.fullPrice}>
                        <span>Товары ({data.length})</span>
                        <span>{auxInfo.fullPrice} руб.</span>
                    </span>

                    <span className={classes.sale}>
                        <span>Скидка</span>
                        <span>{auxInfo.salePrice} руб.</span>
                    </span>

                    <span className={classes.hr}></span>

                    <span className={classes.total}>
                        <span>Общая стоимость</span>
                        <span>{auxInfo.totalPrice} руб.</span>
                    </span>

                    <span className={classes.goToOffer}>
                        Перейти к оформлению
                    </span>

                    <span className={classes.comment}>
                        Доступные способы и время доставки, форму оплаты можно выбрать при оформлении заказа
                    </span>
                </div>
            </div>


            {props.recomendations !== undefined ? <Recomendations data={props.recomendations}/> : null}
        </div>
    )
}