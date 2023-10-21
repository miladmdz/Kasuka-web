import "./Title.css"

function Title({title,text}) {
    return ( 
        <div className="title">
             <div className="services-title">
            <h2 className="services-title-h2">{title}</h2>
            <p className="services-title-p">{text}</p>
          </div>
        </div>
     );
}

export default Title;