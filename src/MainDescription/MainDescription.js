import "./MainDescription.css"
//icons
import { FaImage } from 'react-icons/fa';

function MainDescription() {
    return ( 
        <div className="description-item-box">
            <div className="descriptions-item-box-icon">
                <FaImage className="icon-description"/>
            </div>
            <div className="descriptions-item-box-title">
                <h2>تبلیغ سختی است</h2>
                <p>نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
            </div>
        </div>
     );
}

export default MainDescription;