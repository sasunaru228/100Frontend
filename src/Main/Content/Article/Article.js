import styled from "styled-components";



const MainArticle = styled.div`
  margin-top: 31px;
  > span {
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.045em;
    color: #000000;
  }
  .big{
    position: relative;
    border-radius: 4px;
    img{
      width: 705px;
      height: 461px;
      object-fit: cover;
      border-radius: 4px;
    }
    p{
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      margin: 354px 0 0 12px;
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      letter-spacing: -0.045em;
      color: #000000;
    }
  }
  > div {
    margin-top: 31px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div:nth-child(1) {
      border-radius: 5px;
      width: 705px;
      height: 461px;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      div {
        box-shadow: 0px 1px 2px rgba(187, 189, 198, 0.47);
        border-radius: 4px;
        width: 335px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        .title {
          margin: 26px 17px 0 18px;
          font-family: Ubuntu, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: -0.015em;
          color: #000000;
        }

        .text {
          margin: 20px 17px 0 18px;
          font-family: Open Sans, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          letter-spacing: -0.045em;
          color: #000000;
        }
      }
    }
  }
`


function Article(props){
    return(
        <MainArticle>
            <span>Статьи</span>
            <div>
                <div className="big">
                    <img src={props.data.big.img} alt="kk"/>
                    <p>{props.data.big.short_text}</p>
                </div>
                <div>
                    {
                        props.data.small.map((image, id) => {
                                return (
                                    <div key={id}>
                                        <img src={image.img} alt="img"/>
                                        <p className="title">{image.header}</p>
                                        <p className="text">{image.short_text}</p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </MainArticle>
    )
}

export default Article