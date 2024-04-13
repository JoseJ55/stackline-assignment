import './Product.css';
import { useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

export default function Product() {
    const { allProducts, currentProduct, isError, isLoading } = useAppSelector((state) => state.product);

    useEffect(() => {   
        console.log('all', allProducts);
        console.log('current', currentProduct);
        console.log('loading', isLoading);
        console.log('error', isError);
    }, [allProducts, currentProduct, isLoading, isError]);

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