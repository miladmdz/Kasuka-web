import React from "react";
import "./ServicesBox.css"

// icons

class ServicesBox extends React.Component {
    render(){
        return ( 
            <div className="services-box">
                    <div className="services-box-holder">
                        <div className="services-box-icon">
                            {this.props.icon}
                        </div>
                        <div className="services-box-text">
                            <h4>
                                <a href="#">{this.props.title}</a>
                            </h4>
                            <p>{this.props.text}</p>
                        </div>
                    </div>
            </div>
         );
    }
}

export default ServicesBox;