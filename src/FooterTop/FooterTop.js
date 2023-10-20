import "./FooterTop.css"

//icons
import { FaLinkedinIn } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';


function FooterTop() {
    return ( 
        <div className="footer-holder">
            <div className="footer-part1">
                <div className="footer-part1-1">
                    <div className="footer-part1-1-1">
                        <img src="./images/Capture1.PNG" alt="" />
                        <h2>KASUKA</h2>
                    </div>
                    <div className="footer-part1-1-2">
                        <p>تهران خیابان آزادی</p>
                        <p>تلفن: 01234567895</p>
                        <p>ایمیل: info@example.com</p>
                    </div>
                    <div className="footer-part1-1-3">
                        <div className="icon-footer-div">
                           <a href=""><FaLinkedinIn className="icon-footer"/></a> 
                        </div>
                        <div className="icon-footer-div">
                           <a href=""><FaSkype className="icon-footer"/></a> 
                        </div>
                        <div className="icon-footer-div">
                          <a href=""><FaInstagram className="icon-footer"/></a>  
                        </div>
                        <div className="icon-footer-div">
                           <a href=""><FaFacebookF className="icon-footer"/></a> 
                        </div> 
                        <div className="icon-footer-div">
                           <a href=""><FaTwitter className="icon-footer"/></a> 
                        </div>
                    </div>
                </div>
                <div className="footer-part1-2">
                    <ul className="footer-part1-2-ul"><p>لینک های مفید</p>
                        <li className="footer-part1-2-li"><a href="" className="footer-part1-2-a"><FaChevronLeft className="icon-footer-left"/>خانه</a></li>
                        <li className="footer-part1-2-li"><a href="" className="footer-part1-2-a"><FaChevronLeft className="icon-footer-left"/>درباره ما</a></li>
                        <li className="footer-part1-2-li"><a href="" className="footer-part1-2-a"><FaChevronLeft className="icon-footer-left"/>خدمات</a></li>
                        <li className="footer-part1-2-li"><a href="" className="footer-part1-2-a"><FaChevronLeft className="icon-footer-left"/>شرایط استفاده از خدمات</a></li>
                        <li className="footer-part1-2-li"><a href="" className="footer-part1-2-a"><FaChevronLeft className="icon-footer-left"/>سیاست حفظ حریم خصوصی</a></li>
                    </ul>
                </div>
                <div className="footer-part1-3">
                <ul className="footer-part1-3-ul"><p>خدمات ما</p>
                        <li className="footer-part1-3-li"><a href="" className="footer-part1-3-a"><FaChevronLeft className="icon-footer-left"/>طراحی وب سایت</a></li>
                        <li className="footer-part1-3-li"><a href="" className="footer-part1-3-a"><FaChevronLeft className="icon-footer-left"/>توسعه وب</a></li>
                        <li className="footer-part1-3-li"><a href="" className="footer-part1-3-a"><FaChevronLeft className="icon-footer-left"/>مدیریت تولید</a></li>
                        <li className="footer-part1-3-li"><a href="" className="footer-part1-3-a"><FaChevronLeft className="icon-footer-left"/>بازاریابی</a></li>
                        <li className="footer-part1-3-li"><a href="" className="footer-part1-3-a"><FaChevronLeft className="icon-footer-left"/>طراحی گرافیک</a></li>
                    </ul>
                </div>
                <div className="footer-part1-4">
                    <h2>خبرنامه ما</h2>
                    <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                    <div className="footer-part1-4-input">
                    <input type="email" name="" id="" />
                    <button>دنبال کردن</button>
                    </div>
                </div>
            </div>
            <div className="footer-part2"></div>
        </div>
     );
}

export default FooterTop;