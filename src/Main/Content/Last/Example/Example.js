import like from "../../Recomendations/like.svg";
import star from "../../Recomendations/star.svg";
import percent from "../../Recomendations/percent.svg";
import styled from "styled-components";

const LastWatched = styled.div`
    margin-top: 31px;
    display: flex;
    flex-direction: row;
    >div:nth-last-child(1){
      margin-right: 0;
    }
    >div{
      width: 219px;
      position: relative;
      background: rgba(196, 196, 196, 0.25);
      margin-right: 21px;
      .main {
        width: 217px;
        height: 230px;
        object-fit: cover;
      }
      .like{
        position: absolute;
        top: 8px;
        right: 8px;
      }
      .cost{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        letter-spacing: -0.045em;
        color: #000000;
        margin-top: 10px;
        margin-left: 2px;
      }
      .costRed{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        letter-spacing: -0.045em;
        color: #FA520F;
        margin-top: 10px;
        margin-left: 2px;
      }
      .sale{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        letter-spacing: -0.095em;
        text-decoration-line: line-through;
        color: #000000;
        margin-left: 4px;
      }
      .title{
        display: block;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        letter-spacing: -0.045em;
        color: #000000;
        margin-right: 70px;
        margin-top: 5px;
        height: 31px;
        margin-left: 2px;
      }
      .stars{
        margin: 12px 0 12px 2px;
      }
      button{
        background: #C4C4C4;
        border-radius: 5px;
        border: none;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.045em;
        color: #000000;
        padding: 10px 19px;
        margin-left: 2px;
      }
      .percent{
        position: absolute;
        top: 205px;
        left: 3px;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.095em;
        color: #FFFFFF;
        img{
          transform: translateY(+3px);
          margin-left: 3px;
          vertical-align: inherit;
        }
      }
    }
`

export default function Example(props){
    return(
        <LastWatched>

            {
                props.history.map((main, id) => {
                        return (
                            <div className="HolderItems" key={id}>
                                <img className="main" src={main.img} alt="img"/>
                                <span className="like">
                                            <img src={like} alt="like" width="24px" height="24px"/>
                                        </span>
                                {main.prices['Скидка'] !== undefined ? <ItemRed data={main.prices}/> : <ItemDefault data={main.prices['Обычная цена']}/>}
                                <span className="title">{main.short_name}</span>
                                <div className="stars">
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                    <img src={star} alt="star"/>
                                </div>
                                <button>В корзину</button>
                            </div>
                        )
                    }
                )
            }
        </LastWatched>
    )
}

function ItemDefault(props) {
    return(
        <>
            <span className="cost">
                {props.data} руб.
            </span>
        </>

    )
}
function ItemRed(props) {
    return(
        <>
            <span className="percent">-{100 - Math.round((props.data['Скидка'] / props.data['Обычная цена']) * 100)}%<img src={percent} alt="percent"/></span>
            <span className="costRed">{Math.round(props.data['Скидка'])} руб.</span>
            <span className="sale">{Math.round(props.data['Обычная цена'])} руб</span>
        </>
    )
}