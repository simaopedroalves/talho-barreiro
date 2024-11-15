
import { useState } from "react";

export default function Contacts ({props}) {

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