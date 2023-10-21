import React from "react";
import "./HeaderBox.css"

class Headerbox extends React.Component {
    render(){
        return ( 
            <div className="header-box">
                <div className="holder-header-box">
                    <div className="img-header-box">
                    {this.props.icon}
                    </div>
                    <div className="text-header-box">
                       <a href="#">{this.props.text}</a> 
                    </div>
                </div>
            </div>
         );
    }
}

export default Headerbox;