import "./DatasBox.css"

//icons

function DatasBox({icon,num,text}) {
    return ( 
        <div className="datas-box">
            <div className="datas-box-top">
                {icon}
                <h2>{num}</h2>
            </div>
            <div className="datas-box-bottom">
                <p>{text}</p>
            </div>
        </div>
     );
}

export default DatasBox;