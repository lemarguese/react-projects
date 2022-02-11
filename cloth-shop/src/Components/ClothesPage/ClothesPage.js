import {useEffect} from "react";
import {getAllClothes} from "../../Reducers/ClothesReducer/clothesActions";
import {useSelector} from "react-redux";
import './ClothesPage.css';
import Sidebar from "../Sidebar/Sidebar";

const ClothesPage = () => {

    // const clothes = useSelector(state => state.clothes);

    useEffect(() => {
        // getAllClothes();
    })

    return (
        <div className="Clothes-bg">
            <aside>
                <Sidebar/>
            </aside>
            <header className="top-header">
                <div className="title-bg">
                    <h1 className="title">Hello, bro</h1>
                </div>
            </header>
            <main>
                <div className="scroller-bg">
                    <div className="categories-left">
                        <h3 className="category-text">Category</h3>
                        <h3 className="category-text">Category</h3>
                        <h3 className="category-text">Category</h3>
                    </div>
                    <div className="categories-lines-first">
                        <div className="line first"></div>
                        <div className="line second"></div>
                        <div className="line third"></div>
                    </div>
                    <figure className="center-circle">
                        <div className="logo"/>
                    </figure>
                    <div className="categories-lines second-line">
                        <div className="line fourth"></div>
                        <div className="line fifth"></div>
                        <div className="line sixth"></div>
                    </div>
                    <div className="categories-right">
                        <h3 className="category-text">Category</h3>
                        <h3 className="category-text">Category</h3>
                        <h3 className="category-text">Category</h3>
                    </div>

                </div>
            </main>
            <footer>
                <div className="contacts-bg">
                    <h1>I'm also here</h1>
                </div>
            </footer>
        </div>
    )
}

export default ClothesPage;