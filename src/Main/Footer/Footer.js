import styled from "styled-components";
import logo from "./logo.svg"
import React from "react";
import {Link} from "react-router-dom";
import vk from "./vk.svg"
import fb from "./fb.svg"
import inst from "./inst.svg"
import tg from "./tg.svg"
import youtube from "./yt.svg"
import whats from "./whats.svg"
import skype from "./skype.svg"
import telegram from "./teleg.svg"
import viber from "./viber.svg"
import mail from "./mail.svg"

const MainFooter = styled.div`
  margin-top: 57px;
  background: #453A35;
  border-radius: 6px 6px 0 0;
  display: flex;
  flex-direction: column;
  .top{
    margin-top: 47px;
    display: flex;
    flex-direction: row;
    align-items: center;
    >img{
      margin-left: 9px;
    }
    p{
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 127.9%;
      color: #FFFFFF;
      margin-left: 35px;
      margin-top: 20px;
    }
    form{
      margin-left: 80px;
      height: 70px;
      width: 720px;
      background: rgba(196, 196, 196, 0.25);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      input{
        margin-left: 18px;
        background: transparent;
        border: none;
        outline: none;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
      }
      input[type="email"]::-webkit-input-placeholder { color: white; }
      input[type="email"]::-moz-placeholder { color: white; }
      button{
        font-family: Ubuntu, sans-serif;
        margin-right: 15px;
        background: transparent;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;

      }
    }
  }
  .bottom{
    display: flex;
    flex-direction: row;
    margin-bottom: 71px;
    margin-top: 80px;
    .bottomList{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 240px;
      margin-right: 50px;
      margin-left: 15px;
      .social{
        div{
          margin-top: 12px;
          display: flex;
          flex-direction: row;
          img{
            margin-right: 10px;
          }
        }
      }
      span{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 127.9%;
        color: #FFFFFF;
        
      }
      p{
        margin-top: 8.5px;
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 127.9%;
        color: #FFFFFF;
      }
    }
    .right{
      margin-left: 235px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 127.9%;
        color: #FA520F;
      }
      .tel a{
        display: block;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 127.9%;
        color: #FFFFFF;

      }
      .socials{
        display: flex;
        flex-direction: row;
        img{
          margin-right: 10px;
        }
      }
    }
  }
`

function Footer() {

    const [email, setEmail] = React.useState('');

    const handleEmailChange = (email) => {
        setEmail(email);
        console.log(email);
    }
    return(
        <MainFooter>
            <div className="top">
                <img src={logo} alt="logo"/>
                <p>Наши предложения у Вас в почте</p>
                <form action="">
                    <input placeholder="email" type="text" value={email} onChange={e => handleEmailChange(e.target.value)}/>
                    <button type="submit">Подписаться</button>
                </form>
            </div>
            <div className="bottom">
                <div className="bottomList">
                    <div>
                        <span>О магазине</span>
                        <p>Новости 100r.by</p>
                    </div>
                    <div>
                        <span>Информация</span>
                        <p>Доставка и самовывоз</p>
                        <p>Условия рассрочки</p>
                        <p>Способы оплаты</p>
                        <p>Гарантия</p>
                        <p>Контакты</p>
                    </div>
                </div>
                <div  className="bottomList">
                    <div>
                        <span>Личный Кабинет</span>
                        <p>Возврат</p>
                        <p>История заказов</p>
                    </div>
                    <div className="social">
                        <span>
                            Мы online 24/7
                        </span>
                        <div>
                            <Link><img src={vk} alt="vk"/></Link>
                            <Link><img src={fb} alt="fb"/></Link>
                            <Link><img src={inst} alt="inst"/></Link>
                            <Link><img src={tg} alt="tg"/></Link>
                            <Link><img src={youtube} alt="youtube"/></Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p>Быстрая и удобная связь с нами!</p>
                    <div className="tel">
                        <a href="tel:+375 (29) 690-39-39">+375 (29) 690-39-39</a>
                        <a href="tel:+375 (29) 690-39-39">+375 (29) 690-39-39</a>
                        <a href="tel:+375 (29) 690-39-39">+375 (29) 690-39-39</a>
                    </div>
                    <div className="socials">
                        <Link><img src={whats} alt="social"/></Link>
                        <Link><img src={skype} alt="social"/></Link>
                        <Link><img src={telegram} alt="social"/></Link>
                        <Link><img src={viber} alt="social"/></Link>
                        <Link><img src={mail} alt="social"/></Link>
                    </div>
                </div>
            </div>
        </MainFooter>
    )
}


export default Footer