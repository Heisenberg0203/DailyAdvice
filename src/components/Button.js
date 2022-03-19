import "../css/Button.css";
export default function Button({onClickHandler}){
    return (
        <div className="button-wrapper">
            <button className="button" onClick={()=>{onClickHandler()}}>Give me Advice!</button>
        </div>
    );
}