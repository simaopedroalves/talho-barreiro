import { useState } from "react";
import { SocialMedia } from "../Footer/Footer";
import './Navbar.css'
import React from "react";
//STYLE

const ul = {
    display: 'grid',
    justifyContent: 'center',
    textAlign: 'center'

}

const li = {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    minHeight: 'calc(50lvh/5)',
    fontWeight: 'bold',
    padding: '8lvw',
    fontSize: '1.2rem'
}

const a = {
    color: 'var(--white)',
    textDecoration: 'none'

}


export function Navbar() {

    
const [activeMenu, setActiveMenu] = useState(false);
    
const toggleMenu = () => {
    setActiveMenu(!activeMenu);
}

    return (
      <div>
            <header className="header" >
                <img src="./Images/logo-img.jpeg" alt="" id="logoImg"/>
                <h1 className="companyName">Talho Barreiro</h1>
                <i className="fa-solid fa-ellipsis" onClick={toggleMenu}></i>
            </header>

            <nav className={`navbar ${activeMenu ? 'openMenu' : ''}`} id="VoltarAoTopo">
                <ul className="" style={ul}>
                    <MenuOptions />
                    <SocialMedia />
                </ul>
            </nav>
      </div>
    );
}

const menuList = document.querySelector('.navbar');

function MenuOptions () {

    const options = [
        {name: 'Sobre', link: '#Sobre'},
        {name: 'Produtos', link: '#Produtos'},
        {name: 'Contactos', link: '#Contactos'},
        {name: 'Morada', link: '#Morada'}
    ]

    const optionsArr = options.map((el) => {

        return (
            <li key={el.name} style={li} >
                <a href={el.link} style={a}>{el.name}</a>
            </li>
        );
    });
    
    return (
        <>{optionsArr}</>
    );
}

