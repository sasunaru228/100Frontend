import BuyOnTime from "./BuyOnTime/BuyOnTime";
import Article from "./Article/Article";
import Recomendations from "./Recomendations/Recomendations";
import Last from "./Last/Last";


function Content(props) {
    return(
        <>
            {props.data.buy_now ? <BuyOnTime data={props.data.buy_now}/> : null}
            {props.data.articles ? <Article data={props.data.articles}/> : null}
            {props.data.recommends ? <Recomendations data={props.data.recommends}/> : null}
            {(props.data.history && props.data.brands) ? <Last history={props.data.history} brands={props.data.brands} /> : null}
        </>

    )
}

export default Content