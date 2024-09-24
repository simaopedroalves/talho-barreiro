import './EntryImages.css'

export function EntryImages () {
    return (
        <>
            <div className="entryImages">
                {/* <div className='entryText'> */}
                    <p>Comprove a diferença da qualidade</p>
                    {/* <p>O local onde a carne é a peça central e onde o corte faz a diferença.</p> */}
                {/* </div> */}
            </div>
           
            <Product product = {{
                title: "Picanha", 
                description: 'Esta picanha é que é boa',
                urlImage: './assets/picanha.jpg'
                }}
            />

            <Product product = {{
                title: "Vazio", 
                description: 'Este Vazio é muito bom!',
                urlImage: './assets/vazio.jpg'
                }}
            />  

            <Product product = {{
                title: "Tomahawk", 
                description: 'Este tomahawk é muito bom!',
                urlImage: './assets/tomahawk.jpg'
                }}
            />  

            <Product product = {{
                title: "Bochecha Porco", 
                description: 'Estas bochechas são muito boas!',
                urlImage: './assets/bochecha-porco.jpg'
                }}
            />  
             
        </>
    )
}

function Product ({product}) {
    return (
        <>
            <div className='product-box-presentation'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <img src={product.urlImage} alt={product.title} className='product-image'/>
            </div>
        </>
    );
}

