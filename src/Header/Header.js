import "./Header.css"

//icons
import { FaList } from 'react-icons/fa';

function Header(){
    return(
        <div className="header">
            <div className="header-holder">
            <div className="container">
                <div className="holder-header">
                <FaList className="icon-list-hamber"/>
                <button>شروع</button>
                <ul className="ul-header">
                    <li className="li-header">خانه</li>
                    <li className="li-header">درباره ما</li>
                    <li className="li-header">خدمات</li>
                    <li className="li-header">نمونه کارها</li>
                    <li className="li-header">تیم </li>
                    <li className="li-header">لیست کشویی</li>
                    <li className="li-header">تماس باما</li>
                </ul>
                <div className="holder-icon-and-text">
                <p><a href="#">KASUKA</a></p>
                <img src="./images/Capture1.PNG" alt="icon" className="img"/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Header