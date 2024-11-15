import { useState } from "react";
import { SocialMedia } from "../Footer/Footer";
import React from "react";

export function Navbar() {
    
const [activeMenu, setActiveMenu] = useState(false);
    
const toggleMenu = () => {
    setActiveMenu(!activeMenu);
}

    return (
      <div>
            <header className="header" >
                <div className="logo">
                    <img src="./Images/logo-img.jpeg" alt="" id="logoImg"/>
                    <h3 className="companyName">Talho Barreiro</h3>
                </div>
                <i className="fa-solid fa-ellipsis" onClick={toggleMenu}></i>
                <nav className={`navbar ${activeMenu ? 'openMenu': ''}`} id="VoltarAoTopo">
                    <ul className="">
                        <MenuOptions />
                        <SocialMedia />
                    </ul>
                </nav>
            </header>
            
      </div>
    );
}

// const menuList = document.querySelector('.navbar');

function MenuOptions () {

    function toggleMenu() {
        
        let navbar = document.querySelector('.navbar');

        navbar.classList.remove('openMenu');
    }

    const options = [
        {name: 'Sobre', link: '#Sobre'},
        {name: 'Produtos', link: '#Produtos'},
        {name: 'Contactos', link: '#Contactos'},
        {name: 'Morada', link: '#Morada'}
    ]

    const optionsArr = options.map((el) => {

        return (
            <li key={el.name}>
                <a href={el.link} onClick={toggleMenu}>{el.name}</a>
            </li>
        );
    });
    
    return (
        <>{optionsArr}</>
    );
}

