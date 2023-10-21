import React from "react";
import "./MainDescription.css"

class MainDescription extends React.Component {
    render(){
        return ( 
            <div className="description-item-box">
                <div className="descriptions-item-box-icon">
                    {this.props.icon}
                </div>
                <div className="descriptions-item-box-title">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
         );
    }
}

export default MainDescription;