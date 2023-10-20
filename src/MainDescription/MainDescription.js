import "./MainDescription.css"
//icons
import { FaImage } from 'react-icons/fa';

function MainDescription(props) {
    return ( 
        <div className="description-item-box">
            <div className="descriptions-item-box-icon">
                <FaImage className="icon-description"/>
            </div>
            <div className="descriptions-item-box-title">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
     );
}

export default MainDescription;