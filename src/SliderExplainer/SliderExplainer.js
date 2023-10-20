import "./SliderExplainer.css"

//icons
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

function SliderExplainer() {
    return ( 
        <div className="slider-explainer">
            <div className="slider-explainer-part1">
                <div className="slider-explainer-part1-img">
                    <img src="./images/Capture18.PNG" alt="" />
                </div>
                <div className="slider-explainer-part1-title">
                    <h2>ساول گودمن</h2>
                    <p>مدیران عامل:پایه گذار</p>
                </div>
            </div>
            <div className="slider-explainer-part2">
                <p>
                   <FaQuoteLeft className="slider-explainer-icon"/>
                  پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.                  
                   <FaQuoteRight className="slider-explainer-icon"/>
                </p>
            </div>
        </div>
     );
}

export default SliderExplainer;