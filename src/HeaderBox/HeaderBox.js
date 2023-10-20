import "./HeaderBox.css"

function Headerbox(props) {
    return ( 
        <div className="header-box">
            <div className="holder-header-box">
                <div className="img-header-box">
                {props.icon}
                </div>
                <div className="text-header-box">
                   <a href="#">{props.text}</a> 
                </div>
            </div>
        </div>
     );
}

export default Headerbox;