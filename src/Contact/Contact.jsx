import './Contact.css'
import { useState } from 'react';

export function Contact () {
    return (
        <div className='contact'>
            <h1>Contactos</h1>
            
            <Address props = {{
                icon: "fa-solid fa-location-dot",
                title: 'Morada',
                paragraph: 'Av. Narciso Ferreira, V. N. Famalicão'
            }}/>

            <Contacts props = {{
                icon: "fa-solid fa-phone",
                title: 'Telefone',
                paragraphOne: '252 375 776',
                paragraphTwo: '917 443 736'
            }}/>

            <Contacts props = {{
                icon: "fa-solid fa-envelope",
                title: 'Email',
                paragraphOne: 'barreirodesde1986@gmail.com'
            }}/>
            
            <TalkToUs />
        </div>
    );
}


function Address ({props}) {
    return (
        <>
            <div className='address'>
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
            </div>
        </>
    );
}

function Contacts ({props}) {
    return (
        <>
            <div className='address'>
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p>{props.paragraphOne}</p>
                <p>{props.paragraphTwo}</p>
            </div>
        </>
    );
}

function TalkToUs () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('Olá equipa do Talho Barreiro');
    const [text, setText] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeMessage(e) {
        setMessage(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault()

       
        
    }

    return (
        <form action="" className='talkToUs'>

            <h3>Deixe-nos a sua mensagem</h3>

            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' name='Nome' value={name} onChange={handleChangeName}/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='Email' value={email} onChange={handleChangeEmail}/>
            </div>

            <div className='messageDiv'>
                <label htmlFor="message">Mensagem</label>
                <textarea name="Mensagem" id="message" rows="10" value={message} onChange={handleChangeMessage}></textarea>
            </div>

            <button type='submit' className='submitBtn' onClick={submitForm}>Enviar</button>


            <p>{text}</p>
        </form>
    );
}