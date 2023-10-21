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
//header box
import { FaCircle } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaBrush } from 'react-icons/fa';
//main description
import { FaImage } from 'react-icons/fa';
import { FaReceipt } from 'react-icons/fa';
import { FaCube } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
//services
import { FaBaseballBall } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaChalkboard } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { FaBatteryFull } from 'react-icons/fa';
//datas
import { FaSmile } from 'react-icons/fa';
import { FaJournalWhills } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';


function App() {

  let allHeaderBox=[
    {icon:<FaHome className="icon"/>,text:"متن نمایشی"},
    {icon:<FaChartBar className="icon"/>,text:"نمودار کیفی"},
    {icon:<FaCalendarAlt className="icon"/>,text:"نمونه کارها"},
    {icon:<FaBrush className="icon"/>,text:"عملکرد های پایانی"},
    {icon:<FaDatabase className="icon"/>,text:"اطلاعات ذخیره شده"},
  ]

  let allDescriptionBox=[
    {icon:<FaReceipt className="icon-description"/>,title:"تبلیغ سختی است",text:"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"},
    {icon:<FaCube className="icon-description"/>,title:"کدام یک از اینهاست",text:"کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"},
    {icon:<FaImage className="icon-description"/>,title:"یا کور شده است",text:"یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"},
    {icon:<FaShieldAlt className="icon-description"/>,title:"حقیقت مبارک",text:"آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"},
  ]

  let allServicesBox=[
    {icon:<FaBaseballBall className="icon-services"/>,title:"لورم اپیسوم",text:"برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"},
    {icon:<FaFileAlt className="icon-services"/>,title:"  مشاهده می کنید",text:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
    {icon:<FaTachometerAlt className="icon-services"/>,title:"دردهای بزرگ",text:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
    {icon:<FaBatteryFull className="icon-services"/>,title:"هیچکس دیگر",text:"اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"},
    {icon:<FaChalkboard className="icon-services"/>,title:"لولا را پاک کنید",text:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
    {icon:<FaBath className="icon-services"/>,title:"دیوا دان",text:"روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"},
  ]

  let allDataBox=[
    {icon:<FaSmile className="icon-datas-box"/>,num:65,text:"مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."},
    {icon:<FaJournalWhills className="icon-datas-box"/>,num:85,text:"پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"},
    {icon:<FaClock className="icon-datas-box"/>,num:35,text:"سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"},
    {icon:<FaAward className="icon-datas-box"/>,num:20,text:"جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"},
  ]

  let allTeamBox=[
    {src:"./images/Capture19.PNG",title:"والتر وایت",text:"مدیر ارشد اجرایی"},
    {src:"./images/Capture20.PNG",title:"سارا جونسون",text:"مدیر تولید"},
    {src:"./images/Capture21.PNG",title:"ویلیام اندرسون",text:"CTO"},
    {src:"./images/Capture22.PNG",title:"آماندا جپسون",text:"حسابدار"},
  ]

  return (
    <div className="App">
      <Header/>
      <div className="bgc">

      <Headertext/>
        <div className="holder-icons">
          <Headerbox {...allHeaderBox[0]}/>
          <Headerbox {...allHeaderBox[1]}/>
          <Headerbox {...allHeaderBox[2]}/>
          <Headerbox {...allHeaderBox[3]}/>
          <Headerbox {...allHeaderBox[4]}/>
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
              <MainDescription {...allDescriptionBox[0]}/>
              <MainDescription {...allDescriptionBox[1]}/>
              <MainDescription {...allDescriptionBox[2]}/>
              <MainDescription {...allDescriptionBox[3]}/>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <Title h2="خدمات" p="خدمات ما را بررسی کنید"/>
          <div className="services-box">
            <ServicesBox {...allServicesBox[0]}/>
            <ServicesBox {...allServicesBox[1]}/>
            <ServicesBox {...allServicesBox[2]}/>
            <ServicesBox {...allServicesBox[3]}/>
            <ServicesBox {...allServicesBox[4]}/>
            <ServicesBox {...allServicesBox[5]}/>
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
          <Title h2="نمونه کارها" p="نمونه کارها ما را بررسی کنید"/>
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
                <DatasBox {...allDataBox[0]}/>
                <DatasBox {...allDataBox[1]}/>
                <DatasBox {...allDataBox[2]}/>
                <DatasBox {...allDataBox[3]}/>
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
        <Title h2="تیم" p="تیم ما را بررسی کنید"/>
        <div className="team-holder">
        <TeamBox {...allTeamBox[0]}/>
        <TeamBox {...allTeamBox[1]}/>
        <TeamBox {...allTeamBox[2]}/>
        <TeamBox {...allTeamBox[3]}/>
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