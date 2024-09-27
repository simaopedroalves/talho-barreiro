export function Navbar() {

    return (
      <div>
            <header className="header">
                <img src="/dist/assets/logo-img.jpeg" onClick={handleBackHome} alt="" id="logoImg"/>
                <h1 className="companyName">Talho Barreiro</h1>
                <i className="fa-solid fa-ellipsis" onClick={handleMenu}></i>
            </header>
            <nav className='navbar'>
                <ul className="menu-options-disabled menu-list">
                    <li onClick={handleSobre}>Sobre</li>
                    <li onClick={handleContactos}>Contactos</li>
                    <li onClick={handleProdutos}>Produtos</li>
                    <li onClick={handleHistoria}>História</li>
                </ul>
            </nav>
      </div>
    );
}

function handleMenu () {
    let menuList = document.querySelector('.menu-list');

    menuList.classList.toggle('menu-options-disabled');
}

function handleSobre () {
    console.log('sobre');
}

function handleContactos () {
    console.log('Contactos');
}

function handleProdutos () {
    console.log('Produtos');
}

function handleHistoria () {
    console.log('Historia');
}

function handleBackHome () {
    console.log('Image Clicked');
    
}
