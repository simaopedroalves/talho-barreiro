export default function Product ({title, description, urlImage}) {
    return (
        
        <li className='product-box-presentation'>
            <h1>{title}</h1>
            <img src={urlImage} alt={title} className='product-image'/>
            <p>{description}</p>
        </li>
        
    );
}
