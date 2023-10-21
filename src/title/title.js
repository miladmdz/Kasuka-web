import React from "react";
import "./Title.css"

class Title extends React.Component {
    render(){
      return ( 
        <div className="title">
             <div className="services-title">
            <h2 className="services-title-h2">{this.props.title}</h2>
            <p className="services-title-p">{this.props.text}</p>
          </div>
        </div>
     );
    }
}

export default Title;