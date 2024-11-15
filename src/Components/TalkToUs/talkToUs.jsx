import { useState } from "react";
import './talkToUs.css'

export default function TalkToUs () {

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

    // function submitForm(e) {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const dataObj = Object.fromEntries(formData);
        

    //     console.log(dataObj);
        

    // }


    return (

        // <form action="/mensagem" className='talkToUs' name='mensagem' method='POST' onSubmit={submitForm}>
        <form action="/mensagem" className='talkToUs' name='mensagem' method='POST'>

            <input type="hidden" name='Nova_Mensagem' value={`Nova mensagem de ${name}`} data-remove-prefix/>
            <input type="hidden" name='form-name' value="mensagem"/>

            <h3>Deixe-nos a sua mensagem</h3>

            <div>
                <label htmlFor="name">Nome</label>
                <input required type="text" id='name' name='Nome' value={name} onChange={handleChangeName}/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input required type="email" id='email' name='Email' value={email} onChange={handleChangeEmail}/>
            </div>

            <div className='messageDiv'>
                <label htmlFor="message">Mensagem</label>
                <textarea required name="Mensagem" id="message" rows="10" value={message} onChange={handleChangeMessage}></textarea>
            </div>

            <button type='submit' className='submitBtn' id='submitButton'>Enviar</button>

        </form>
    );
}
