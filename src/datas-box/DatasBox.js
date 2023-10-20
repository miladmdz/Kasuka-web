import "./DatasBox.css"

//icons

function DatasBox(props) {
    return ( 
        <div className="datas-box">
            <div className="datas-box-top">
                {props.icon}
                <h2>{props.num}</h2>
            </div>
            <div className="datas-box-bottom">
                <p>{props.text}</p>
            </div>
        </div>
     );
}

export default DatasBox;