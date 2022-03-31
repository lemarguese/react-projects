import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {Route, Routes} from "react-router-dom";
import ClothesPage from "./Components/ClothesPage/ClothesPage";
import LoginLayout from "./Components/LoginRegistryPage/LoginLayout";

function App() {
    return (
        <Routes>
            <Route index exact element={<LandingPage title = "Clothes Shop" />}/>
            <Route path="/clothes/" exact element={<ClothesPage/>}/>
            <Route path="/clothes/:category" element={<ClothesPage/>}/>
            <Route path="/login" exact element={<LoginLayout/>}/>
        </Routes>
    );
}

export default App;
