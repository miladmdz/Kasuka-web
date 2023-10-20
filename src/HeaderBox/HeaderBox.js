import "./HeaderBox.css"

//icons
import { FaDatabase } from 'react-icons/fa';

function Headerbox(props) {
    return ( 
        <div className="header-box">
            <div className="holder-header-box">
                <div className="img-header-box">
                <FaDatabase className="icon"></FaDatabase>
                </div>
                <div className="text-header-box">
                   <a href="#">{props.text}</a> 
                </div>
            </div>
        </div>
     );
}

export default Headerbox;