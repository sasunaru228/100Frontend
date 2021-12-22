import classes from "./SpecificarionsTab.module.css";
import styled from "styled-components";

const Value = styled.div`
  ul {
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
    return(
        <div className={classes.holder}>
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
                                            {/*{step.value ?  : <span className={classes.value}>не завезли</span>}*/}
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