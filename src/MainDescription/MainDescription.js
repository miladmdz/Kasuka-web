import "./MainDescription.css"

function MainDescription(props) {
    return ( 
        <div className="description-item-box">
            <div className="descriptions-item-box-icon">
                {props.icon}
            </div>
            <div className="descriptions-item-box-title">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
     );
}

export default MainDescription;