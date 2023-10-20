import "./ServicesBox.css"

// icons
import { FaBaseballBall } from 'react-icons/fa'

function ServicesBox(props) {
    return ( 
        <div className="services-box">
                <div className="services-box-holder">
                    <div className="services-box-icon">
                        <FaBaseballBall className="icon-services"/>
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