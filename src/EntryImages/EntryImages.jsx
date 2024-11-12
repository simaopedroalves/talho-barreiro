import './EntryImages.css';
import { productsData } from './productsData';
import Product from '../Components/Products/Products';

export function EntryImages () {
    return (
        <>
            <div className="entryImages" id='Produtos'>
                    <p>Comprove a diferença da qualidade</p>
                    {/* <p>O local onde a carne é a peça central e onde o corte faz a diferença.</p> */}
            </div>
            <ul>
                {productsData.map(item => (
                    <Product {...item} key={item.title}/>
                ))}
            </ul>
        </>
    )
}


