import styled from 'styled-components'
import Flickity from 'react-flickity-component'


const Slider = styled.div`
  width: 1440px;
  overflow: hidden;
  margin-top: 33px;
`

function Banner(props) {
        return(
            <Slider>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={
                        {
                            wrapAround: true,
                            prevNextButtons: false,
                            pageDots: false
                        }
                    }
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate
                >

                    {
                        props.data !== undefined ? props.data.map((image, id) => {
                                return <img key={id}  src={image} alt="img"/>
                            }
                        ) : null
                    }
                </Flickity>
            </Slider>

        )


}



export default Banner