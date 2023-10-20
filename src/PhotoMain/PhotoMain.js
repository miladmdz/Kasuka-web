import "./PhotoMain.css"
//icons
import { FaCircle } from 'react-icons/fa';

function PhotoMain() {
    return ( 
        <div className="photo-main">
            <div className="container">
                <div className="holder-photo-main">
                <div className="photo-main-p1">
                    <img src="./images/Capture4.png" alt="" />
                    <img src="./images/Capture4.png" alt="" />
                    <img src="./images/Capture4.png" alt="" />
                    <img src="./images/Capture4.png" alt="" />
                    <img src="./images/Capture4.png" alt="" />
                    <img src="./images/Capture4.png" alt="" />
                </div>
                <div className="photo-main-p2">
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                    <FaCircle className="icon-circle"/>
                </div>
                </div>
            </div>
        </div>
     );
}

export default PhotoMain;