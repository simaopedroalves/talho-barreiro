import './Footer.css'

// Style

const footer = {
    backgroundColor: 'var(--gray-one)',
    margin: 0,
    border: 'none',
    outline: 'none',
    padding: '5lvh 0',
}
const li = {
    listStyle: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
}

const a= {
    textDecoration: 'none',
    color: 'var(--white)',
    cursor: 'pointer',
}

const ul = {
    display: 'grid',
    justifyContent: 'center',
    gap: '5lvh',
    alignItems: 'center',
    padding: '5lvh 0',
    textAlign: 'center'
}

export function Footer () {

    const footerLinkNames = [
        {name: 'Contactos', link: '#Contactos'},
        {name: 'Morada', link: '#Morada'},
        {name: 'Sobre', link: '#Sobre'},
        {name: 'Produtos', link: '#Produtos'},
        {name: 'Voltar ao topo', link: '#VoltarAoTopo'}
    ]; 

    const links = footerLinkNames.map((element) => {
        return(
            <li key={element.name} style={li}>
                <a href={element.link} style={a}>{element.name}</a>
            </li>
        );
    });

    return (
        <footer style={footer}>
            <ul style={ul}>
                {links}
            </ul>
            <SocialMedia/>
            <Schedule/>
            <DevName/>
        </footer>
    );
}

export function SocialMedia () {
    
    //Style

    const ulSocialMedia = {
        display: 'flex',
        justifyContent: 'center',
        gap: '3lvw',
        fontSize: '2rem',
        color: 'white'
    }

    const socialMediaArr = [
        {name: 'Instagram', link: 'https://www.instagram.com/talhodobarreiro/', icon: 'fa-brands fa-instagram'},
        {name: 'FaceBook', link: 'https://www.facebook.com/talho.do.barreiro/?locale=pt_PT', icon: 'fa-brands fa-square-facebook'},
    ];

    const socialMediaMap = socialMediaArr.map((el) => {
        return(
            <li key={el.name} style={li}>
                <a href={el.link} style={a}>
                    <i className={el.icon}></i>
                </a>
            </li>
        );
    });

    return (
        <ul style={ulSocialMedia}>
            {socialMediaMap}
        </ul>
    );
}

function DevName () {
    
    //Style
    const devNameStyle = {
        textAlign: 'center',
        color: 'var(--white)',
        fontSize: '0.5rem',
        margin: '10lvh 0'
    }

    const aDevName = {
        textDecoration: 'none',
        color: 'var(--white)',
        cursor: 'pointer',
        textDecoration: 'underline'
    }

    const devArr = [
        {name: ' Simão Pedro', portfolio: 'https://portfoliosimaopedro.webdevsp.com/'}
    ]

    const devName = devArr.map((el) => {
        return (
            <p key={el.name} style={devNameStyle}>Desenvolvido por
                <a href={el.portfolio} style={aDevName}>
                    {el.name}
                </a>
            </p>
        );
    })

    return (
        <>
        {devName}
        </>
    );
}

function Schedule () {

    const schedule = [
        {day: '2ª -', time: '10:00 - 19:30'},
        {day: '3ª a 6ª -', time: '08:30 - 19:30'},
        {day: 'Sábado -', time: '08:30 - 13:30'},
        {day: 'Almoço -', time: '13:00 - 14:30'}
    ]

    const scheduleArr = schedule.map((el) => {
        return (
            <li key={el.day}>{el.day} {el.time}</li>
        );
    })

    return (
        <ul className='schedule'>
            <p>Horário Funcionamento</p>
            {scheduleArr}
        </ul>
    );
}