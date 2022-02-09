import './LandingPage.css';
import Sidebar from "../Sidebar/Sidebar";

const LandingPage = (props) => {

    return (
        <>
            <Sidebar/>
            <div className="LandingPage-top">
                {props.title}
            </div>
            <div className="LandingPage-main">
                <div className="cards-background">
                    <div className = "cards">
                        <div className="image"></div>
                    </div>
                    <div className = "cards">
                        <div className="image"></div>
                    </div>
                    <div className = "cards">
                        <div className="image"></div>
                    </div>
                    <div className = "cards">
                        <div className="image"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;