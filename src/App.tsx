import { useEffect } from 'react'
import './App.css'

import productData from './stackline_frontend_assessment_data_2021.json';

import { useAppDispatch } from './app/hooks';
import { setProducts } from './features/product/productSlice';

import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(setProducts(productData));
    } catch (error) {
      console.error('Data Error: ', error);
    }
  }, [dispatch])

  return (
    <div id='app'>
      <Nav />

      <div id='product-details'>
        <Product />
      </div>
    </div>
  )
}

export default App
