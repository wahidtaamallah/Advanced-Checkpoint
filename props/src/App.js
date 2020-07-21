import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable'
const product = [
  {category: 'clothes',name: 'T-shirt',price: 30 },
  {category: 'clothes',name: 'chemise',price: 50 },
  {category: 'clothes',name: 'Pantalon',price: 70 },
  {category: 'Electronics',name: 'Television',price: 400 },
  {category: 'Electronics',name: 'telephone',price: 500 },
  {category: 'Electronics',name: 'PC',price: 900 }
];
function App() {
  return (
    <div>
 <ProductTable
 products={product}/>
  </div>
  );
}

export default App;
