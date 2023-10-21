import "./CvImages.css"
import CvList from "../CvList/CvList.js";

//icons 

import { FaLink } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import React from "react";


class CvImages extends React.Component {
constructor(props){
  super(props)
   this.allData={
    data:[
      {text:"همه"},
      {text:"برنامه"},
      {text:"محصول"},
      {text:"اینترنت"},  
    ]
    }
}
  render(){
    return ( 
      <div className="cv-list-images">
      <div className="cv-list">
        <CvList {...this.allData.data[0]}/>
        <CvList {...this.allData.data[1]}/>
        <CvList {...this.allData.data[2]}/>
        <CvList {...this.allData.data[3]}/>
        </div>
        <div className="cv-images">
          <div className="cv-images1">
            <div className="cv-images1-in">
          <img src="./images/Capture7.PNG" alt="" />               
              <h4>برنامه1</h4>
              <p>برنامه</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
            <div className="cv-images4">
            <div className="cv-images4-in">
          <img src="./images/Capture10.PNG" alt="" />
          <h4>برنامه3</h4>
              <p>برنامه</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          </div>
          <div className="cv-images2">
            <div className="cv-images2-in">
          <img src="./images/Capture8.PNG" alt="" />
          <h4>اینترنت 3</h4>
              <p>اینترنت</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
            <div className="cv-images5">
            <div className="cv-images5-in">
          <img src="./images/Capture11.PNG" alt="" />
          <h4>محصول 2</h4>
              <p>محصول</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          <div className="cv-images7">
            <div className="cv-images7-in">
          <img src="./images/Capture13.PNG" alt="" />
          <h4>محصول 1</h4>
              <p>محصول</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          <div className="cv-images8">
            <div className="cv-images8-in">
          <img src="./images/Capture14.PNG" alt="" />
          <h4>محصول 3</h4>
              <p>محصول</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          </div>
          <div className="cv-images3">
            <div className="cv-images3-in">
          <img src="./images/Capture9.PNG" alt="" />
          <h4>برنامه 2</h4>
              <p>برنامه</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
            <div className="cv-images6">
            <div className="cv-images6-in">
          <img src="./images/Capture12.PNG" alt="" />
          <h4>اینترنت 2</h4>
              <p>اینترنت</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          <div className="cv-images9">
            <div className="cv-images9-in">
          <img src="./images/Capture15.PNG" alt="" />
          <h4>اینترنت 3</h4>
              <p>اینترنت</p> 
              <a href="#">
              <FaLink className="icon-Cv-link"/>
              </a>
              <a href="#">
              <FaPlus className="icon-Cv-plus"/>
              </a>
            </div>
          </div>
          </div> 
        </div>
      </div>
   );
  }
    
}

export default CvImages;