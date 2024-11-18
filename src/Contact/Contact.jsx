import './Contact.css'
import React from 'react';
import Address from '../Components/Address/address.jsx';
import Contacts from '../Components/Contacts/contacts.jsx';
import TalkToUs from '../Components/TalkToUs/talkToUs.jsx';

export function Contact () {

    return (
        <div className='contact'>
            <h1 id='Contactos'>Contactos</h1>

            <Address props = {{
                icon: "fa-solid fa-location-dot",
                title: 'Morada',
                paragraph: 'Av. Narciso Ferreira, V. N. Famalicão',
                link: 'Morada'
            }}/>

            <Contacts props = {{
                icon: "fa-solid fa-phone",
                title: 'Telefone',
                paragraphOne: '917 443 736 ',
                paragraphTwo: '252 375 776'
            }}/>

            <Address props = {{
                icon: "fa-solid fa-envelope",
                title: 'Email',
                paragraph: 'barreirodesde1986@gmail.com'
            }}/>
            
            <TalkToUs />
        </div>
    );
}






