import { useEffect } from 'react'
import './App.css'; // CSS.

// JSON data
import productData from './stackline_frontend_assessment_data_2021.json';

// Redux
import { useAppDispatch } from './app/hooks';
import { setProducts } from './features/product/productSlice';

// Components
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';
import Graph from './components/Graph/Graph';
import Table from './components/Table/Table';

export default function App() {
  const dispatch = useAppDispatch();

  // Simulate calling a api and getting the data, which it should then set the data with redux.
  // For scaling the product being set is both the first in the array and all data.
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

      {/* Hold main body */}
      <div id='product-details'>
        <Product />

        {/* Hold chart and stats */}
        <div id='product-stats'>
          <Graph />
          <Table />
        </div>
      </div>
    </div>
  )
}
