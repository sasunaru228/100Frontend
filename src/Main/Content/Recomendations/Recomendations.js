import styled from "styled-components";
import Example from "../Last/Example/Example";

const MainRecomendations = styled.div`
  margin-top: 31px;
    >span{
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: -0.045em;
      color: #000000;
    }
  >div{
    margin-top: 31px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .HolderItems{
      width: 219px;
      position: relative;
      background: rgba(196, 196, 196, 0.25);
      .main{
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
        margin-left: 2px;
      }
      .costRed{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        letter-spacing: -0.045em;
        color: #FA520F;
        margin-left: 2px;
      }
      .sale{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        letter-spacing: -0.095em;
        text-decoration-line: line-through;
        overflow: hidden;
        color: #000000;
        margin-left: 4px;
      }
      .title{
        height: 31px;
        display: block;
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        letter-spacing: -0.045em;
        color: #000000;
        margin-right: 70px;
        margin-top: 5px;
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
  ;
  }
`

function Recomendations(props) {
    return(
        <MainRecomendations>
            <span>
                Рекомендации для вас
            </span>
            <div>
                {props.data ? <Example data={props.data}/>: null}
            </div>

        </MainRecomendations>
    )
}

export default Recomendations;
