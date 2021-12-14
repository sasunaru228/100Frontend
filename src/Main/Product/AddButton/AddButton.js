


export default function AddButton (props){
    return(
        <div
            className="greyBox"
            onClick={() => {
                props.handleChange(props.idx)
            }}
        >
            <span className="word">
               {props.word}
            </span>
        </div>
    )
}