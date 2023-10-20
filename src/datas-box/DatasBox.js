import "./DatasBox.css"

//icons
import { FaSmile } from 'react-icons/fa';

function DatasBox() {
    return ( 
        <div className="datas-box">
            <div className="datas-box-top">
                <FaSmile className="icon-datas-box"/>
                <h2>65</h2>
            </div>
            <div className="datas-box-bottom">
                <p>مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.</p>
            </div>
        </div>
     );
}

export default DatasBox;