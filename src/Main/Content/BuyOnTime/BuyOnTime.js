import styled from "styled-components";
import like from "../../../img/BuyOnTime/like.svg"
import {NavLink} from "react-router-dom";


const SaleItem = styled.div`
  width: 150px;
  height: 287px;
  background: rgba(196, 196, 196, 0.25);
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  margin-bottom: 24px;
  position: relative;
  .data{
    object-fit: cover;
    width: 150px;
    height: 177px;
  }
  .sale{
    margin-top: 3px;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.095em;
    color: #FA520F;
  }
  .cost{
    margin-top: 3px;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.095em;
    text-decoration-line: line-through;
    color: #000000;
  }
  .best{
    margin-top: 3px;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.04em;
    color: #FA520F;
  }
  >p{
    text-overflow: ellipsis;
    margin-top: 10px;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.095em;
    color: #000000;
    margin-bottom: 0;
  }
  .like{
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
const SaleHolder = styled.div`
  width: 100%;
  height: 623px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  *{
    text-decoration: none;
  }
`
const DontKnow = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  .banner{
    width: 717px;
    display: flex;
    flex-direction: column;
    img{
      margin-bottom: 24px;
    }
  }
`
const OnTime = styled.span`
  margin-top: 31px;
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.045em;
  color: #000000;
`
const OnTimeAfter = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.045em;
  color: #FA520F;
`
function BuyOnTime(props) {
    return(
        <>
            <OnTime>Успей купить!!!</OnTime>
            <DontKnow>
                <SaleHolder>
                    {props.data.products.map((inf, id) => {
                            return (
                                <NavLink
                                    to={{
                                        pathname: '/product/' + inf.product_id
                                    }}
                                    key={id}
                                >
                                    <SaleItem>
                                                        <span className="like">
                                                            <img src={like} alt="like" width="24" height="24"/>
                                                        </span>
                                        <img className="data" src={inf.img} alt="sale"/>
                                        <span className="sale">{inf.prices['Обычная цена']} руб.</span>
                                        <span className="cost">{inf.prices['Скидка']} руб.</span>
                                        <span className="best">Бестселлер</span>
                                        <p>{inf.short_name}</p>
                                    </SaleItem>
                                </NavLink>
                            )
                    })}
                </SaleHolder>
                <div className="banner">
                    {props.data.banners.map((kkk, id) => {
                                return (
                                    <img key={id} src={kkk} alt="banner"/>
                                )
                            }
                        )
                    }
                </div>
            </DontKnow>
            <OnTimeAfter>
                Все скидки здесь!
            </OnTimeAfter>
        </>
    )
}


export default BuyOnTime