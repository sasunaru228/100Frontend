


export default function AddButton (props){
    return(
        <div
            className="greyBox"
            onClick={props.handleChange}
        >
            <span className="word">
               {props.word}
            </span>
        </div>
    )
}