import './Product.css'; // CSS

// Redux
import { useAppSelector } from '../../app/hooks';

// THe production section with details on the product and name of teh main product looking.
export default function Product() {
    // Redux selector holding the current product.
    const { currentProduct } = useAppSelector((state) => state.product);

    return (
        <div id='product'>
            <img id='product-image' src={currentProduct?.image} alt={`image of the product ${currentProduct?.title}`} />

            <h1 id='product-title'>{currentProduct?.title}</h1>
            <h2 id='product-subtitle'>{currentProduct?.subtitle}</h2>

            <div id='product-tags'>
                {currentProduct?.tags.map((tag) => (
                    <p className='product-tag'>{tag}</p>
                ))}
            </div>
        </div>
    )
}