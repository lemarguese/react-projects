import {useEffect} from "react";
import './ClothesPage.css';
import Sidebar from "../Sidebar/Sidebar";
import {NavLink, useParams} from "react-router-dom";

const ClothesPage = () => {

    const category = useParams();
    useEffect(() => {
        console.log(category);
    })

    const linksToFirstCategories = (
        <>
            <a href="underwear" className="category-text">Underwear</a>
            <a href="jackets" className="category-text">Jackets</a>
            <a href="sneakers" className="category-text">Sneakers</a>
        </>
    )
    const linksToSecondCategories = (
        <>
            <a href="pants" className="category-text">Pants</a>
            <a href="headings" className="category-text">Headings</a>
            <a href="socks" className="category-text">Socks</a>
        </>
    )

    // const clothes = useSelector(state => state.clothes);

    useEffect(() => {
        // getAllClothes();
    })

    const center = (
        <div className="scroller-bg">
            <div className="animation-cover"/>
            <div className="categories-left">
                {linksToFirstCategories}
            </div>
            <div className="categories-lines">
                <div className="line first"></div>
                <div className="line second"></div>
                <div className="line third"></div>
            </div>
            <div className="circle-bg">
                <figure className="center-circle">
                    <div className="logo"/>
                </figure>
            </div>
            <div className="categories-lines">
                <div className="line fourth"></div>
                <div className="line fifth"></div>
                <div className="line sixth"></div>
            </div>
            <div className="categories-right">
                {linksToSecondCategories}
            </div>
        </div>
    )

    const categor = (<h3 className="category-text">hello</h3>)

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
                {category.category ? categor : center}
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