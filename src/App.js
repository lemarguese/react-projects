import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClothesPage from "./Components/ClothesPage/ClothesPage";
import LoginLayout from "./Components/LoginRegistryPage/LoginLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {<LandingPage title = "Clothing Shop"/>}/>
                <Route path = "/clothes" exact element = {<ClothesPage/>}/>
                <Route path = "/login" exact element = {<LoginLayout/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
