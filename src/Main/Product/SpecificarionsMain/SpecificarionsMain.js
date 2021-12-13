import classes from './SpecificarionsMain.module.css'

const paramss = [
    {
        value: 'testValue1',
        name: 'testName1',
        isMain: true,
    },
    {
        value: 'testValue2',
        name: 'testName2',
        isMain: false,
    },
    {
        value: 'testValue3',
        name: 'testName3',
        isMain: true,
    },
    {
        value: 'testValue4',
        name: 'testName4',
        isMain: true,
    },
    {
        value: 'testValue5',
        name: 'testName5',
        isMain: true,
    },
    {
        value: 'testValue6',
        name: 'testName6',
        isMain: true,
    },
]

export default function SpecificarionsMain(props){
    return (
        <span className={classes.mainHolder}>
            {paramss.map((item, id) => {
                if (item.isMain){
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