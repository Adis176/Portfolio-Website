import React from "react";
// import { DiVim } from "react-icons/di";
import "./tool.css"
// import Canva from "../../Assets/Images/Tools/canva.png";
import Figma from "../../Assets/Images/Tools/figma.png";

export default function Tool(){
    return (
        <div>
            <div className = 'tool-container'>
                <div className = 'tool-card'>
                <div className = 'image'>
                    <img src={Figma} alt="canva"/>
                </div>
                <div className = 'tool-content' >
                    <h3>Tools</h3>
                </div>
                </div>    
            </div>
        </div>
    );
}