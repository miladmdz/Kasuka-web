import "./DatasBox.css"

//icons
import { FaSmile } from 'react-icons/fa';

function DatasBox(props) {
    return ( 
        <div className="datas-box">
            <div className="datas-box-top">
                <FaSmile className="icon-datas-box"/>
                <h2>{props.num}</h2>
            </div>
            <div className="datas-box-bottom">
                <p>{props.text}</p>
            </div>
        </div>
     );
}

export default DatasBox;