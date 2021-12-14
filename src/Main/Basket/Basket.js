import classes from "./Basket.module.css"
import {NavLink} from "react-router-dom"
import arrow from "../../img/Product/arrow.svg"
import Recomendations from "../Content/Recomendations/Recomendations"
import {useEffect, useState} from "react"
import {axiosDefault} from "../../Settings/axiosDefault"

export default function Basket(props){
    const arr = [1,2,3,4,5,6,7,8,9,10];
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
                            id : Number.parseInt(id),
                            count : Number.parseInt(count),
                            fact_price : response.data.prices['Скидка'] ? Number.parseFloat(response.data.prices['Скидка']) : Number.parseFloat(response.data.prices['Обычная цена']),
                            data : response.data
                        }
                    ])
                })
            }
    }, [])

    function getResult(){
        let result = {
            "products" : [

            ]
        }
        data.forEach((item) => {
            result.products.push({
                "id": item.id,
                "quantity": item.count,
                "fact_price": item.fact_price
            })
        })
        return result
    }

    function handleChange(e){
        let result = data.filter(item => item.id === Number.parseInt(e.target.id))
        result[0].count = e.target.value;
        setData(result)
        setData(() => {
            return data.map((item) => {
                if (item.count === e.target.value){
                    const edited = item;
                    edited.count = Number.parseInt(e.target.value)
                    return edited
                }
                else {
                   return item
                }
            })
        })
        localStorage.setItem(e.target.id, e.target.value)
    }



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
                let value1 = 0, value2 = 0;
                data.forEach((item) => {
                    value1 += Number.parseFloat(item.data.prices['Обычная цена']) * item.count;
                    if (item.data.prices['Скидка'] !== undefined || item.data.prices['Скидка'] === 0){
                        value2 += Number.parseFloat(item.data.prices['Скидка']) * item.count;
                    }
                    else {
                        value1 -= Number.parseFloat(item.data.prices['Обычная цена']) * item.count;
                    }
                })
                return Math.floor((value1 - value2) * 100) / 100
            }
            const totalPrice = () => {
                let value = 0;
                data.forEach((item) => {
                    if (item.data.prices['Скидка'] !== undefined || item.data.prices['Скидка'] === 0){
                        value += Number.parseFloat(item.data.prices['Скидка']) * item.count;
                    }
                })
                return Math.floor(value * 100) / 100
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

            {data.length > 0 ?
                <div className={classes.main}>

                    <div className={classes.basketInfo}>
                        <form>
                            <input type="checkbox"/>
                            <button type="button" className={classes.selectAll}>Выбрать всё</button>
                            <button type="submit" className={classes.deleteAll}>Удалить выбранные</button>
                        </form>
                        <hr/>
                        {
                            data.map((item, index) => {
                                console.log(item.data.prices)
                                return (
                                    <div className={classes.bItem} key={index}>
                                        <div className={classes.bItem__into}>
                                            <input type="checkbox"/>
                                            <NavLink to={'/product/' + item.id}>
                                                <img src={item.data.imgs[0]} alt="bItem"/>
                                            </NavLink>
                                            <div className={classes.bItem__into__group}>
                                            <span className={classes.holder}>
                                                <span>{item.data.full_name}</span>
                                                <span>Характеристики товара: цвет, вид, вес</span>
                                                <span>{item.data.manufacturer}</span>
                                            </span>
                                                <span className={classes.like}>В избранное</span>
                                            </div>
                                            <div className={classes.numbers}>
                                                {
                                                    item.data.prices['Скидка'] ? <span className={classes.totalP}>{item.data.prices['Скидка']} руб.</span> : null
                                                }
                                                {
                                                    item.data.prices['Скидка'] ?  <span className={classes.fullP}>{item.data.prices['Обычная цена']} руб.</span> : <span className={classes.fullPP}>{item.data.prices['Обычная цена']} руб.</span>
                                                }

                                                {
                                                    item.data.prices['Скидка'] ? <span className={classes.saleP}>- {item.data.prices['Обычная цена'] - item.data.prices['Скидка']} руб.</span> : null
                                                }

                                            </div>
                                            <select value={item.count} className={classes.counter} onChange={handleChange} id={item.id}>
                                                {arr.map((item) => {
                                                    return (
                                                        <option key={item} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })
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
                        {
                            auxInfo.salePrice > 0 ?<span className={classes.sale}><span>Скидка</span><span>- {auxInfo.salePrice} руб.</span></span>: null
                        }


                        <span className={classes.hr}></span>

                        <span className={classes.total}>
                        <span>Общая стоимость</span>
                        <span>{auxInfo.fullPrice - auxInfo.salePrice} руб.</span>
                    </span>

                        <span className={classes.goToOffer} onClick={() => {

                            axiosDefault.post('cart/submit', getResult()
                            ).then((response) => {
                                alert('Заказ № ' + response.data.order_id + ' успешно создан')
                                setData([])
                                localStorage.clear()
                            })
                        }
                        }>
                            Перейти к оформлению
                        </span>

                        <span className={classes.comment}>
                            Доступные способы и время доставки, форму оплаты можно выбрать при оформлении заказа
                        </span>
                    </div>
                </div>
                : null
                // <div className={classes.ban}>
                //     <h1>Ваша корзина пуста</h1>
                // </div>
            }



            {props.recomendations !== undefined ? <Recomendations data={props.recomendations}/> : null}
        </div>
    )
}