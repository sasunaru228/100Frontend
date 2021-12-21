import React, {useState} from "react";
import ii from "../../../../img/Catalog/o.svg"
import classes from "./Catalog.module.css";
import styled from "styled-components";
import arrow from "../../../../img/Catalog/arrow.svg";
import test from "../../../../img/Catalog/test.svg";

const kkk = ['Первая','Вторая','Третья','Четвертая','Пятая', 'Шестая', 'Пример', 'Пример', 'Пример', 'Пример', 'Пример', 'и еще'];
const DropDown = styled.div`
  z-index: 2;
  position: absolute;
  top: +100%;
  right: 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
`
const DropDownItem = styled.span`
  height: 43.33px;
  width: 385px;
  border-bottom: 2px solid #C4C4C4;
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:nth-last-child(1){
    border-bottom: none;
  }
  img,p{
    transition: all 0.4s;
  }
  &:hover{
    img,p{
      transform: translateX(+13px);
    }
  }
  >p{
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    padding-left: 20px;
    color: #8A8A8A;
    text-align: left;
    width: 100%;
  }
`
const CatalHolder = styled.div`
  padding-left: 7px;
  position: absolute;
  background: #FFFFFF;
  z-index: 3;
  width: 485px;
  top: 100%;
  left: 100%;
  .top{
    width: 100%;
    padding: 16px 0;
    span{
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      letter-spacing: -0.045em;
      color: #FA520F;
      margin-left: 5px;
    }
    span:nth-child(2){
      margin-left: 15px;
    }
  }
  .holder{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 491px;
  }
  .item{
    background: #F0F0F0;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 110px;
    height: 110px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin-left: 0;
      object-fit: cover;
      width: 98px;
      height: 78px;
    }
    p{
      text-align: center;
      margin-top: 6px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 9px;
      letter-spacing: -0.045em;
      color: #000000;
    }
  }
`

function Ctg() {
    return(
        <DropDown>
            {kkk.map((name, id) => {
                return (
                    <DropDownItem key={id}>
                        <img className="name" src={test} alt="pic" width="32" height="32"/>
                        <p>{name}</p>
                        <img src={arrow} width="10" height="10" alt="strelkaBlya"/>
                    </DropDownItem>
                )
            })}
        </DropDown>
    )
}
function Catal(props){
    return(
            <CatalHolder>
                <div className="top">
                    <span>Акции</span>
                    <span>Как выбрать товар</span>
                </div>
                <div className="holder">
                    {
                        props.data.map((newCatal, id) => {
                                return (
                                    <div key={id} className="item">
                                        <img src={newCatal.img} alt="hehe"/>
                                        <p>{newCatal.name}</p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </CatalHolder>
    )
}
function Catalog(props) {
    const [isOpen, setIsOpen] = useState(0);
    return(
        <>
            <div className={classes.button} onMouseOver={() => setIsOpen(1)} onMouseLeave={() => setIsOpen(0)} >
                {isOpen ? <Ctg/> : null}
                <img src={ii} alt="dropdown" width="19" height="12" />
                <span>Каталог</span>
                {isOpen ? <Catal data={props.data}/> : null}
            </div>
        </>
    )
}

export default Catalog