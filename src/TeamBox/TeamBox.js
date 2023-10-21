import React from "react";
import "./TeamBox.css"


class TeamBox extends React.Component {
    render(){
        return ( 
            <div className="team-box">
                <div className="team-box-holder">
                    <div className="team-box-img">
                        <img src={this.props.src} alt="" />
                    </div>
                    <div className="team-box-text">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
         );
    }
}

export default TeamBox;