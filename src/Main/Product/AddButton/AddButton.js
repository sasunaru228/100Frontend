


export default function AddButton (props){
    return(
        <div
            className="greyBox"
            onClick={(e) => {
                props.handleChange(props.idx)
                e.preventDefault()

            }}
        >
            <span className="word">
               {props.word}
            </span>
        </div>
    )
}