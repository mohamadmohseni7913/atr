import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { AiOutlineHeart,AiOutlineSearch,AiOutlineShopping } from "react-icons/ai";

const ProductCard = ({ countProps, newPro,to,name,price }) => {
    const [count, setCount] = useState(countProps);
    const [newProduct, setNewProduct] = useState(newPro);
    const {id} = useParams()
    return (
        <>
            <Link   to={`/productPage/${to}`} class="product-Card">
                <div class="product-Card-Img">
                    <img src="/assets/img/item-instagram-1.jpg" alt="" />
                    {
                        newProduct === true ? <div class="product-Card-Img-New">
                            <p>new</p>
                        </div> : null
                    }

                    <div class="product-Card-Img-Overlay">
                        <AiOutlineHeart/>
                        <AiOutlineSearch/>
                        <AiOutlineShopping/>
                    </div>
                </div>
                {/* <!-- product card count down --> */}
                {
                    count === true ? <div class="product-Count-Down">
                        <p><span>00</span><span>days</span></p>
                        <p><span>00</span><span>hrs</span></p>
                        <p><span>00</span><span>mns</span></p>
                        <p><span>00</span><span>secs</span></p>
                    </div> : null
                }

                <span class="product-Card-Title">
                   {
                       name
                   }
                </span>
                <span class="product-Card-Point">
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </span>
                <span class="product-Card-Price">
                   {price}
                </span>
                {/* <!-- product card overlay --> */}


            </Link>
        </>
    );
};

export default ProductCard;