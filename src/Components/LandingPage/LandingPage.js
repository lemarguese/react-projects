import './LandingPage.css';
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";

const LandingPage = (props) => {

    return (
        <>
            <Sidebar/>
            <div className="LandingPage-top">
                {props.title}
            </div>
            <div className="LandingPage-main">
                <hr/>
                <div className="cards-background">
                    <Link to="/clothes" className = "cards">
                        <div className="image"/>
                    </Link>
                    <Link to="/clothes" className = "cards">
                        <div className="image"/>
                    </Link>
                    <Link to="/clothes" className = "cards">
                        <div className="image"/>
                    </Link>
                    <Link to="/clothes" className = "cards">
                        <div className="image"/>
                    </Link>
                </div>
                <hr/>
            </div>
            <div className="LandingPage-location">

            </div>
        </>
    )
}

export default LandingPage;