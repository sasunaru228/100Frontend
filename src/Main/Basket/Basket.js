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
            let id = localStorage.key(i)
            setData(prev => [
                ...prev,
                [localStorage.key(i), localStorage.getItem(id)]
            ])
        }
    }, [])


    let obj = [];
    let promises = [];
    if (data){
        for (let i = 0; i < data.length; i++) {
            const url = 'products/' + data[i][0];
                promises.push(
                    axiosDefault.get(url).then((response) => {
                                obj.push(response.data)
                            }
                        )
                )
        }
    }
    Promise.all(promises).then(() => console.log(obj))
    ///// вот тут через промисы и только через них приходит нормальный обьект !
    // Далее задача в том, чтобы вставить каким-то хуем это в jsx и далее .map, я не умею 


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

                    {

                    }

                </div>

                <div className={classes.sum}>
                    <span className={classes.weight}>
                        <span>Ваша корзина</span>
                        <span>? товара на(1.42 кг)</span>
                    </span>

                    <span className={classes.fullPrice}>
                        <span>Товары (?)</span>
                        <span>FullPrice</span>
                    </span>

                    <span className={classes.sale}>
                        <span>Скидка</span>
                        <span>Sale</span>
                    </span>

                    <hr/>

                    <span className={classes.total}>
                        <span>Общая стоимость</span>
                        <span>TotalCost</span>
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