import React from "react";
import "./CvList.css"

class CvList extends React.Component {
  render(){
    return ( 
        <div className="CvList">
            <p>{this.props.text}</p>
        </div>
     );
  }
}

export default CvList;