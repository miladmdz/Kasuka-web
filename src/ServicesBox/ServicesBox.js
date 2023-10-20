import "./ServicesBox.css"

// icons

function ServicesBox(props) {
    return ( 
        <div className="services-box">
                <div className="services-box-holder">
                    <div className="services-box-icon">
                        {props.icon}
                    </div>
                    <div className="services-box-text">
                        <h4>
                            <a href="#">{props.title}</a>
                        </h4>
                        <p>{props.text}</p>
                    </div>
                </div>
        </div>
     );
}

export default ServicesBox;