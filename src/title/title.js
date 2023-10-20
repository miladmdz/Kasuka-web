import "./Title.css"

function Title(props) {
    return ( 
        <div className="title">
             <div className="services-title">
            <h2 className="services-title-h2">{props.h2}</h2>
            <p className="services-title-p">{props.p}</p>
          </div>
        </div>
     );
}

export default Title;