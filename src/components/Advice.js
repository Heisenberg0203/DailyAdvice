import "../css/Advice.css";
export default function Advice({advice}){
    return (
        <div className="advice-wrapper">
            <h2 className="adive">{advice}</h2>
        </div>
    );
}