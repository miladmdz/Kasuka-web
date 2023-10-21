import "./HeaderBox.css"

function Headerbox({icon,text}) {
    return ( 
        <div className="header-box">
            <div className="holder-header-box">
                <div className="img-header-box">
                {icon}
                </div>
                <div className="text-header-box">
                   <a href="#">{text}</a> 
                </div>
            </div>
        </div>
     );
}

export default Headerbox;