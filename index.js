import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";

function ncard(val){
  return(<Card imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
/>
 );
}

ReactDOM.render(<>
<h1>LIST OF TOP 5 NETFLIX SEERIES IN 2021</h1>

{Sdata.map(ncard)}
</>
 ,
  document.getElementById('root'));