import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProduct } from '../../../store/ProductReducer';
import ProductCard from '../productCard/ProductCard';

const ProductFilter = () => {
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(loadProduct())
    },[])
    return (
        <>
            <div className='product-Filter'>
                {/* product filter btn */}
                <div class="product-Filter-Btn">
                    <button>bestSeller</button>
                    <button>new Arrivals</button>
                    <button> top related </button>
                </div>
                {/* product-Filter-Product-Section */}
                <div className='product-Filter-Product-Section'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>
        </>
    );
};

export default ProductFilter;