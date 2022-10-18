import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [red, setRed] = useState("opacity-25");
  const [yellow, setYellow] = useState("opacity-25");
  const [green, setGreen] = useState("opacity-25");
  const [purple, setPurble] = useState("opacity-25");
  const [display, setdisplay] = useState("none");

function changeRed() {
  setRed(""),setYellow("opacity-25"),setGreen("opacity-25"),setPurble("opacity-25")
}
function changeYellow() {
  setYellow(""),setGreen("opacity-25"),setPurble("opacity-25"),setRed("opacity-25")
}
function changeGreen() {
  setGreen(""),setYellow("opacity-25"),setPurble("opacity-25"),setRed("opacity-25")
}

  //  Funcion para cambiar el color con el boton
  function changeColor() {
    red==""? changeYellow(): yellow==""? changeGreen(): green==""? changeRed(): setRed("")
     }
 
  

  return (
    <div className="text-center">
      <div
        className="card text-white bg-dark mb-3"
        style={{ width: "fit-content", margin: "auto", marginTop: "100px" }}
      >
        <div className="card-body" style={{}}>
          <div
            className={"bg-danger rounded-circle " + red}
            style={{ width: "100px", height: "100px" }}
            onClick={() =>
              red == "opacity-25" ? changeRed() : setRed("opacity-25")
            }
          ></div>
          <div
            className={"bg-warning rounded-circle " + yellow}
            style={{ width: "100px", height: "100px" }}
            onClick={() =>
              yellow == "opacity-25" ? changeYellow() : setYellow("opacity-25")
            }
          ></div>
          <div className="rounded-circle"></div>
          <div
            className={" rounded-circle " + green}
            style={{ width: "100px", height: "100px", backgroundColor:"#58e529" }}
            onClick={() =>
              green == "opacity-25" ? changeGreen() : setGreen("opacity-25")
            }
          ></div>
          <div className="rounded-circle"></div>
          <div
            className={" rounded-circle " + purple}
            style={{ width: "100px", height: "100px", display: display, backgroundColor:"#5519c1" }}
            onClick={() =>
              purple == "opacity-25" ? setPurble("") : setPurble("opacity-25")
            }
          ></div>
          
        </div>
        
      </div>
      <div>
          <button onClick={()=>changeColor()}> Change Color</button>
          <button onClick={()=>{display== "none"? (setdisplay("block"), setPurble("")):setdisplay("none")}}>Purple Buton</button>
          </div>
    </div>
  );
};

export default Home;
