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
        <div>
            product
        </div>
    )
}