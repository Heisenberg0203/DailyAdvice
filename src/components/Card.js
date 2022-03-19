import "../css/Card.css"
import Button from "./Button";
import Advice from "./Advice";
export default function Card({advice,onClickHandler}){
    return(
        <div className="card">
            <Advice advice={advice}>

            </Advice>
            <Button onClickHandler={onClickHandler}>

            </Button>
        </div>
    )
} 