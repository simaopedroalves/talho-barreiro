import './EntryImages.css';

export function EntryImages () {
    return (
        <>
            <div className="entryImages" id='Produtos'>
                    <p>Comprove a diferença da qualidade</p>
                    {/* <p>O local onde a carne é a peça central e onde o corte faz a diferença.</p> */}
            </div>
           
            <Product product = {{
                title: "Picanha", 
                description: 'A nossa picanha nacional é uma verdadeira iguaria que' +
                              'revela o sabor intenso da carne portuguesa.' + 
                              'Com uma textura macia e suculenta, é perfeita para grelhados em família. Venha saborear esta delícia!',
                urlImage: "./Images/picanha.jpg"
                }}
            />

            <Product product = {{
                title: "Vazio", 
                description: 'O bife do vazio é um corte que combina sabor e qualidade, proveniente das melhores carnes portuguesas.' + 
                            'A sua marmoreio proporciona um gosto inigualável em cada garfada. Visite-nos e experimente um pedaço do paraíso!',
                urlImage: "./Images/vazio.jpg"
                }}
            />  

            <Product product = {{
                title: "Tomahawk", 
                description: 'O tomahawk é um espetáculo à mesa, de osso comprido e carne tenra, este corte impressiona não só pelo tamanho,' + 
                                'mas também pelo sabor robusto. Uma experiência imperdível para os verdadeiros apreciadores de carne!',
                urlImage: "./Images/tomahawk.jpg"
                }}
            />  

            <Product product = {{
                title: "Bochecha Porco", 
                description: 'Um tesouro da culinária portuguesa! Oferecem uma textura rica e um sabor profundo.' + 
                            'Cozidas lentamente, derretem na boca. Venha provar e descubra um novo nível de prazer gastronómico!',
                urlImage: "./Images/bochecha-porco.jpg"
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

