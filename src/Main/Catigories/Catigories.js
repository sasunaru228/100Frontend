import styled from "styled-components";
import Flickity from 'react-flickity-component'
import "./flickity.css"
import {useEffect, useState} from "react";


const Contain = styled.div`
    margin-top: 31px;
`
const Heading = styled.span`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 0;
  letter-spacing: -0.045em;
  color: #000000;
`
const Holder = styled.div`
  
  margin-top: 31px;
`
const Item = styled.div`
  padding-top: 21px;
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-right: 25px;
  height: 229px;
  width: 211px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(196, 196, 196, 0.25);
  border-radius: 2px;
  >p{
    margin-top: 14px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.045em;
    color: #000000;
  }
`

function Catigories(props) {
    const [composeData, setComposeData] = useState([]);
    useEffect(() => {
        for (let i = 0; i < props.data.length; i++){
            const count = i;
            setComposeData(prev => [
                ...prev,
                [props.data[count], props.data[count + 1]]
            ]);
            i++;
        }
    }, [props.data])


    return(
        <Contain>
            <Heading>
                Популярные категории
            </Heading>
            <Holder>
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={
                        {
                            prevNextButtons: true,
                            pageDots: false,
                            contain: true,
                        }
                    }
                    disableImagesLoaded={false}
                    reloadOnUpdate
                >
                    {
                        composeData.map((cat, id) => {
                                return (
                                    <div key={id}>
                                        <Item className="carousel-cell">
                                            <img src={cat[0].img} alt="itemImage"/>
                                            <p>{cat[0].name}</p>
                                        </Item>
                                        <Item className="carousel-cell">
                                            <img src={cat[1].img} alt="itemImage"/>
                                            <p>{cat[1].name}</p>
                                        </Item>
                                    </div>
                                )
                        })
                    }
                </Flickity>
            </Holder>
        </Contain>
    )
}

export default Catigories