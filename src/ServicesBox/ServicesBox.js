import "./ServicesBox.css"

// icons

function ServicesBox({icon,title,text}) {
    return ( 
        <div className="services-box">
                <div className="services-box-holder">
                    <div className="services-box-icon">
                        {icon}
                    </div>
                    <div className="services-box-text">
                        <h4>
                            <a href="#">{title}</a>
                        </h4>
                        <p>{text}</p>
                    </div>
                </div>
        </div>
     );
}

export default ServicesBox;