import "./MainDescription.css"

function MainDescription({icon,title,text}) {
    return ( 
        <div className="description-item-box">
            <div className="descriptions-item-box-icon">
                {icon}
            </div>
            <div className="descriptions-item-box-title">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
     );
}

export default MainDescription;