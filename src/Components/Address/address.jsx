export default function Address ({props}) {

    const sendEmail = () => {
        window.location.href = `mailto:${props.paragraph}`
    }

    return (
        <>
            <div className='address' id={props.link}>
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p onClick={sendEmail}>{props.paragraph}</p>
            </div>
        </>
    );
}