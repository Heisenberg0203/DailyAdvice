import React, { useEffect } from "react";
import axios from "axios";
import "../css/Container.css"
import Card from "./Card";
export default function Container(){
    const [advice,setAdvice] = React.useState("");
    useEffect(fetchdata,[]);
    function fetchdata(){
        axios.get("https://api.adviceslip.com/advice")
             .then((response)=>{
                setAdvice(response.data.slip.advice);
 
             })
             .catch((error)=>{
                console.log(error);
                
             })
    }
    return (
    <div className="container">
        <Card advice={advice} onClickHandler={fetchdata}> </Card>
    </div>)
} 