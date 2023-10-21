import "./TeamBox.css"


function TeamBox({src,title,text}) {
    return ( 
        <div className="team-box">
            <div className="team-box-holder">
                <div className="team-box-img">
                    <img src={src} alt="" />
                </div>
                <div className="team-box-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
     );
}

export default TeamBox;