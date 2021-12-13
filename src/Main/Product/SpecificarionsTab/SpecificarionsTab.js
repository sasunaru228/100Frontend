import classes from "./SpecificarionsTab.module.css";


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
    console.log(result)
    return(
        <div className={classes.holder}>
            {
                Object.entries(result).map(([key, value], id) => {
                    return (
                        <div key={id} className={classes.item}>
                            <p className={classes.itemHeader}>{key}</p>
                            <div className={classes.itemBody}>
                                {value.map((step) => {
                                    return(
                                        <div className={classes.itemBody_box}>
                                            <span className={classes.key}>{step.name}</span>
                                            {step.value ? <span className={classes.value}>{step.value}</span> : <span className={classes.value}>не завезли</span>}
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