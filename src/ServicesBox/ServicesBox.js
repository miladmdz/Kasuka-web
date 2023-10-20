import "./ServicesBox.css"

// icons
import { FaBaseballBall } from 'react-icons/fa'

function ServicesBox() {
    return ( 
        <div className="services-box">
                <div className="services-box-holder">
                    <div className="services-box-icon">
                        <FaBaseballBall className="icon-services"/>
                    </div>
                    <div className="services-box-text">
                        <h4>
                            <a href="#">دردهای بزرگ</a>
                        </h4>
                        <p>آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند</p>
                    </div>
                </div>
        </div>
     );
}

export default ServicesBox;