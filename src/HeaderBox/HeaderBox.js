import "./HeaderBox.css"

//icons
import { FaDatabase } from 'react-icons/fa';

function Headerbox() {
    return ( 
        <div className="header-box">
            <div className="holder-header-box">
                <div className="img-header-box">
                <FaDatabase className="icon"></FaDatabase>
                </div>
                <div className="text-header-box">
                   <a href="#">اطلاعات ذخیره شده</a> 
                </div>
            </div>
        </div>
     );
}

export default Headerbox;