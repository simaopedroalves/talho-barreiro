import './Footer.css'

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
            <li key={element.name} className='linkNames'>
                <a href={element.link} >{element.name}</a>
            </li>
        );
    });

    return (
        <footer>
            <ul>
                {links}
            </ul>
            <Schedule/>
            <SocialMedia/>
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
            <li key={el.name}>
                <a href={el.link}>
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
    
    const devArr = [
        {name: ' Simão Pedro', portfolio: 'https://portfoliosimaopedro.webdevsp.com/'}
    ]

    const devName = devArr.map((el) => {
        return (
            <p key={el.name} className='devName'>Desenvolvido por
                <a href={el.portfolio}>
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