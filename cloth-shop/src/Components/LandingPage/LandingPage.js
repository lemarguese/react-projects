import './LandingPage.css';
import Sidebar from "../Sidebar/Sidebar";
import {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";

const LandingPage = (props) => {

    // useEffect(() => {
    //     if ()
    // })

    return (
        <>
            <Sidebar/>
            <div className="LandingPage-top">
                {props.title}
            </div>
            <div className="LandingPage-main">
                <hr/>
                <div className="cards-background">
                    <a href="/clothes"  className = "cards">
                        <div className="image"/>
                    </a>
                    <NavLink to="/clothes" className = "cards">
                        <div className="image"/>
                    </NavLink>
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