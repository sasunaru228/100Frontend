import classes from "./SpecificarionsTab.module.css";
import styled from "styled-components";
import {useEffect} from "react";

const Value = styled.div`
  ul {
    margin-bottom: 0;
    list-style-type: none;
    padding: 0;
    flex-direction: column;
    &:after{
      display: none;
    }
  }
`



export default function SpecificarionsTab(props){
    let result = {}
    if (props){
        props.params.forEach((item) => {
            if (result[item.group_name]){
                result = {
                    ...result,
                    [item.group_name]: [...result[item.group_name] , item]
                }
            }
            else {
               result = {
                   ...result,
                   [item.group_name]: [item]
               }
            }

        })
    }

    useEffect(() => {
        const contain = Array.from(document.querySelector('#contain1').children)
        const edit = document.querySelector('#contain1')
        let result = 0;
        contain.forEach((item) => {
            result = result + item.offsetHeight
        })
        edit.style.height = result * 1.4 / 2 + "px"
        console.log(result)
    }, [])

    return(
        <div className={classes.holder} id={'contain1'}>
            {
                Object.entries(result).map(([key, value], id) => {
                    return (
                        <div key={id} className={classes.item}>
                            <p className={classes.itemHeader}>{key}</p>
                            <div className={classes.itemBody}>
                                {value.map((step, id) => {
                                    return(
                                        <div className={classes.itemBody_box} key={id}>
                                            <span className={classes.key}>{step.name}</span>
                                            <Value className={classes.value} dangerouslySetInnerHTML={{ __html: step.value}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}