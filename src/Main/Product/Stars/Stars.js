import classes from './Stars.module.css'
import isLight from './isLight.svg'
import notLight from './notLight.svg'

export default function Stars(props){
    const setter = [];
    for (let i = 1; i <= 5; i++){
        if (i <= props.count){
            setter.push({
                light: true
            })
        }
        else {
            setter.push({
                light: false
            })
        }
    }

    return(
        <div className={classes.holder}>
            {
                setter.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.light ? <img src={isLight} alt=""/> : <img src={notLight} alt="star"/>}
                        </div>
                    )
                })
            }
        </div>
    )
}