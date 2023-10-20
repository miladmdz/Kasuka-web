import "./CvList.css"

function CvList(props) {
    return ( 
        <div className="CvList">
            <p>{props.text}</p>
        </div>
     );
}

export default CvList;