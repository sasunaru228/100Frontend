import styled from "styled-components";
import Example from "./Example/Example";




const LastMain = styled.div`
  .holderMain{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .watchedHolder{
      display: flex;
      flex-direction: column;
    }
  }
  .brands{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .holderBrands{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 720px;
      height: 380px;
      margin-top: 31px;
      
      img{
        width: 150px;
        height: 150px;
        margin-bottom: 62px;
        margin-right: 115px;
      }
      img:nth-child(3n+3){
        margin-right: 0;
      }
    }
    >span{
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: -0.045em;
      color: #000000;
    }
  }
  margin-top: 31px;
  .watched{
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.045em;
    color: #000000;
  }
  >div{
    width: 690px;
  }
`


function Last(props) {
    return (
        <LastMain>
            <div className="holderMain">
                <div className="watchedHolder">
                    <span className="watched">
                        Вы смотрели
                    </span>
                    <Example word={"В корзину"} data={props.history}/>
                </div>
                <div className="brands">
                    <span>Бренды</span>
                    <div className="holderBrands">
                        {
                            props.brands.map((image, id) => {
                                    return <img key={id} className="carousel-cell" src={image.img} alt="img"/>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </LastMain>
    )
}




export default Last