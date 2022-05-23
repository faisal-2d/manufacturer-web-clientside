import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [loadProducts, setLoadProducts] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('products.json')
        .then(data => setLoadProducts(data.data));
        setProducts(loadProducts?.slice(0,6));
    },[loadProducts])
    return (
        <div>
            <h3 className='text-3xl text-primary text-center mb-10'>Products/tools: {products.length} </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map((product, index) => <Tool
                    key={index}
                    product={product}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;