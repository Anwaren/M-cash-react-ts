import './Header.scss';
import mCashLogo from '../../img/header/M-cash.png';
import moneyLogo from '../../img/header/Money.png';

export const Header = () => {
    return (
        <header>
            <div className="flex-container header-section">
                <div className="header-content-section">
                    <div className="header-head">
                        <img src={mCashLogo} alt="Cash-Logo" />
                        <div className="contacts-section">
                            <div className=".contacts-us-text">About Us</div>
                            <div className=".contacts-us-text">Resources</div>
                            <input type="button" className="contacts-us-element" value="Contact Us"></input>
                        </div>
                    </div>
                    <div className="header-info-section">
                    <div className="header-info-text-section">
                        <div className="header-info-text">
                            <div className="header-info-text-data">
                                <div>
                                    <div className="big-text">Be Smart,</div>
                                    <div className="big-text">Think Smart,</div>
                                    <div className="big-text">Save Money</div>
                                </div>
                                <div className="small-text">Compare your take-home today</div>
                            </div>
                            <div className="header-info-text-controls">
                                <input type="text" className="header-control phone-number-control" value="Phone Number"></input>
                                <div className="day-submit-div">
                                    <input type="text" className="header-control day-control" value="Day Rate"></input>
                                    <input type="text" className="header-control submit-control" value="Submit"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-info-picture-section">
                        <div className="header-info-picture-img">
                            <img src={moneyLogo} alt="moneyLogo"></img>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
        )
    }