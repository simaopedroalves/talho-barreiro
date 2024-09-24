import './Contact.css'

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
    return (
        <form action="" className='talkToUs'>

            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' name='Nome'/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='Email'/>
            </div>

            <div>
                <label htmlFor="message">Mensagem</label>
                <textarea name="Mensagem" id="message" rows="10"></textarea>
            </div>

            <button type='submit' className='submitBtn'>Enviar</button>
        </form>
    );
}