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
          <Headerbox text="متن نمایشی"/>
          <Headerbox text="نمودار کیفی"/>
          <Headerbox text="نمونه کارها"/>
          <Headerbox text="عملکرد های پایانی"/>
          <Headerbox text="اطلاعات ذخیره شده"/>
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
              <MainDescription h2="تبلیغ سختی است" p="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"/>
              <MainDescription h2="کدام یک از اینهاست" p="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"/>
              <MainDescription h2="یا کور شده است" p="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"/>
              <MainDescription h2="حقیقت مبارک" p="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"/>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <Title h2="خدمات" p="خدمات ما را بررسی کنید"/>
          <div className="services-box">
            <ServicesBox title="لورم اپیسوم" text="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"/>
            <ServicesBox title="اما همانطور که مشاهده می کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"/>
            <ServicesBox title="دردهای بزرگ" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"/>
            <ServicesBox title="هیچکس دیگر" text="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"/>
            <ServicesBox title="لولا را پاک کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"/>
            <ServicesBox title="دیوا دان" text="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"/>
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
                <DatasBox num="65" text="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."/>
                <DatasBox num="85" text="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"/>
                <DatasBox num="35" text="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"/>
                <DatasBox num="20" text="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"/>
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
        <TeamBox src="" title="والتر وایت" text="مدیر ارشد اجرایی"/>
        <TeamBox src="" title="سارا جونسون" text="مدیر تولید"/>
        <TeamBox src="" title="ویلیام اندرسون" text="CTO"/>
        <TeamBox src="" title="آماندا جپسون" text="حسابدار"/>
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