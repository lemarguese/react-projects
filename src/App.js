import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {<LandingPage title = "Clothing Shop"/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
