import './Contact.css'
import { useState } from 'react';
import React from 'react';

export function Contact () {
    return (
        <div className='contact'>
            <h1 id='Contactos'>Contactos</h1>
            
            <Address props = {{
                icon: "fa-solid fa-location-dot",
                title: 'Morada',
                paragraph: 'Av. Narciso Ferreira, V. N. Famalicão'
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


function Address ({props}) {

    const sendEmail = () => {
        window.location.href = `mailto:${props.paragraph}`
    }

    return (
        <>
            <div className='address'>
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p onClick={sendEmail}>{props.paragraph}</p>
            </div>
        </>
    );
}

function Contacts ({props}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const mobilePhoneCall = () => {
        setMobileNumber(`A ligar para ${props.paragraphOne}...`)
        window.location.href = `tel:${props.paragraphOne}`
        
    }

    const phoneCall = () => {
        setPhoneNumber(`A ligar para ${props.paragraphTwo}...`)
        window.location.href = `tel:${props.paragraphTwo}`
    }

    return (
        <>
            <div className='address'>
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p onClick={mobilePhoneCall}>{props.paragraphOne}</p>
                <p onClick={phoneCall}>{props.paragraphTwo}</p>
            </div>
        </>
    );
}

function TalkToUs () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState('Olá equipa do Talho Barreiro');
    const submitBtn = document.querySelector('#submitButton');

    function invalidForm() {
        submitBtn.disabled = true;
    }

    function validForm() {
        submitBtn.disabled = false;
    }

    function handleChangeName(e) {
        setName(e.target.value);

        let regex = new RegExp(/^[a-z\s\ã\í\é]+$/gi);
        let nameTyped = e.target.value;

        regex.test(nameTyped) ? validName() : invalidName();
         
    }

    // ==== NAME VALIDATION ====

    const nameInput = document.querySelector('#name');

    function validName () {{ 
        nameInput.style.border = 'solid var(--white) 2px';
        validForm()
    }}

    function invalidName () {{
        nameInput.style.border = 'solid var(--red) 2px';
        invalidForm()
    }}


    function handleChangeEmail(e) {
        setEmail(e.target.value);

        let regex = new RegExp(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gi);
        let emailTyped = e.target.value;

        regex.test(emailTyped) ? validEmail() : invalidEmail();

    }

    // ==== EMAIL VALIDATION ====

    const emailInput = document.querySelector('#email');

    function validEmail () {{ 
        emailInput.style.border = 'solid var(--white) 2px';
        validForm()
    }}

    function invalidEmail () {{
        emailInput.style.border = 'solid var(--red) 2px';
        invalidForm()
    }}

    // ==== MESSAGE ===

    function handleChangeMessage(e) {
        setMessage(e.target.value);
    }

    // ==== SUBMIT BUTTON VALIDATION

    function submitForm(e) {
        e.preventDefault();
        
    }


    return (
        <form action="" className='talkToUs' name='mensagem' method='POST' netlify>
            <input type="hidden" name='Nova_Mensagem' value={`Nova mensagem de ${name}`} data-remove-prefix/>

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

            <button type='submit' className='submitBtn' onClick={submitForm} id='submitButton'>Enviar</button>

        </form>
    );
}