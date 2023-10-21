import React from "react";
import "./DatasBox.css"

class DatasBox extends React.Component {
   render(){
    return ( 
        <div className="datas-box">
            <div className="datas-box-top">
                {this.props.icon}
                <h2>{this.props.num}</h2>
            </div>
            <div className="datas-box-bottom">
                <p>{this.props.text}</p>
            </div>
        </div>
     );
   }
}

export default DatasBox;