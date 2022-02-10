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
            <div className="Location-header">
                <h1 className="title">Location</h1>
            </div>
            <div className="LandingPage-location">
                <div className="map">
                </div>
                <div className="inner">
                    <h2 className="title">
                        We are located
                    </h2>
                    <p className="content">
                        S. Washington Ave, Blackberry, NJ, 297.
                    </p>
                    {/*<div className="website-text">*/}
                    {/*    <p>Instagram</p>*/}
                    {/*    <p>Facebook</p>*/}
                    {/*    <p>Twitter</p>*/}
                    {/*    <p>LinkedIn</p>*/}
                    {/*</div>*/}
                    <div className="website-icons">
                        <div className="instagram"></div>
                        <div className="facebook"></div>
                        <div className="twitter"></div>
                        <div className="linkedin"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;