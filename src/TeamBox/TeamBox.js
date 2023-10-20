import "./TeamBox.css"


function TeamBox(props) {
    return ( 
        <div className="team-box">
            <div className="team-box-holder">
                <div className="team-box-img">
                    <img src="./images/Capture19.PNG" alt="" />
                </div>
                <div className="team-box-text">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
     );
}

export default TeamBox;