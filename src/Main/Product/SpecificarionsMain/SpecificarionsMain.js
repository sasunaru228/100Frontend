import classes from './SpecificarionsMain.module.css'


export default function SpecificarionsMain(props){
    return (
        <span className={classes.mainHolder}>
            {props.params.map((item, id) => {
                if (item.is_main === true){
                    return(
                        <span className={classes.specItem} key={id}>
                            <span>{item.name}</span>
                            <span>{item.value}</span>
                        </span>
                    )
                }
                else return null
            })}
        </span>
    )
}