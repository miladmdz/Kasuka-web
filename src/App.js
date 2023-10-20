import Header from "./Header/Header.js";
import Headertext from "./HeaderText/Headertext.js";
import Headerbox from "./HeaderBox/HeaderBox.js";
import Maintop from "./MainTop/maintop.js";
import PhotoMain from "./PhotoMain/PhotoMain.js";
import MainDescription from "./MainDescription/MainDescription.js";
import ServicesBox from "./ServicesBox/ServicesBox.js";
import CvImages from "./Cv/CvImage/CvImages.js";
import DatasBox from "./datas-box/DatasBox.js";
import SliderExplainer from "./SliderExplainer/SliderExplainer.js";
import Title from "./title/title.js";
import TeamBox from "./TeamBox/TeamBox.js";
import FooterTop from "./FooterTop/FooterTop.js";
import FooterBottom from "./FooterBottom/FooterBottom.js";
import "./App.css"

//icons
import { FaCircle } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="bgc">

      <Headertext/>
        <div className="holder-icons">
          <Headerbox/>
          <Headerbox/>
          <Headerbox/>
          <Headerbox/>
          <Headerbox/>
        </div>
 
        </div>
      <div className="main">
        <Maintop/>
        <div className="main-photo">
          <PhotoMain/>
        </div>
      </div>
      <div className="main-description">
        <div className="container">
          <div className="holder-description">
            <div className="description-img">
              <img src="./images/Capture5.PNG" alt="" />
            </div>
            <div className="description-box">
              <MainDescription/>
              <MainDescription/>
              <MainDescription/>
              <MainDescription/>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <Title/>
          <div className="services-box">
            <ServicesBox/>
            <ServicesBox/>
            <ServicesBox/>
            <ServicesBox/>
            <ServicesBox/>
            <ServicesBox/>
          </div>
        </div>
      </div>
      <div className="cta">
        <div className="container">
          <div className="holder-cta">
          <h2>فراخوانی برای اقدام</h2>
          <p>
            اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
          </p>
          <button>فراخوانی برای اقدام</button>
          </div>
        </div>
      </div>
      <div className="cv">
        <div className="container">
          <Title/>
         <CvImages/>
        </div>
      </div>
      <div className="datas">
        <div className="container">
          <div className="holder-datas">
            <div className="datas-image"></div>
            <div className="datas-text">
              <div className="datas-text-1">
              <h2>شایسته ترین لذت را به هر حال ارائه می دهد</h2>
                <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
              </div>
              <div className="datas-text-2">
                <DatasBox/>
                <DatasBox/>
                <DatasBox/>
                <DatasBox/>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Explain-pepole">
          <div className="holder-Explain-pepole">
        <div className="container">
          <div className="holder-explain">
          <div className="holder-Explain-pepole-part1">
              <SliderExplainer/>
            </div>
            <div className="holder-Explain-pepole-part2">
            <FaCircle className="icon-circle"/>
            <FaCircle className="icon-circle"/>
            <FaCircle className="icon-circle"/>
            <FaCircle className="icon-circle"/>
            <FaCircle className="icon-circle"/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
        <Title/>
        <div className="team-holder">
        <TeamBox/>
        <TeamBox/>
        <TeamBox/>
        <TeamBox/>
        </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <FooterTop/>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <FooterBottom/>
        </div>
      </div>
    </div>
  );
}

export default App