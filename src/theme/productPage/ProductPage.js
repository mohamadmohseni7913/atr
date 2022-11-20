import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAddToBasket } from '../../store/shoppingBasket';
import ProductCard from '../component/productCard/ProductCard';

const ProductPage = () => {
    const dispatch =useDispatch();
    const {id} =useParams()
    const store=useSelector(state=>state.entities.product)
    const products_ShoppingCart = useSelector(state => state.entities.basket.list)
    const [shoppingStatus,setShoppingStatus]=useState(false)
    // add cart to shopping cart 
    const addToCart=()=>{
    dispatch(productAddToBasket(id))
    setShoppingStatus(true)

    }
    useEffect(()=>{
        let Cart_id =null;
        if(products_ShoppingCart.length > 0){
          Cart_id=products_ShoppingCart.filter(item=>item.id==id)
          if(Cart_id!=null && Cart_id.length>0){
            Cart_id=Cart_id[0].id 
            if(Cart_id == id){
                setShoppingStatus(true)
               }
          }
        
        }
  
    },[])
    return (
        <>
            <div class="product-Page">
                {/* <!-- product page Main --> */}
                <div class="product-Page-Section">
                    {/* <!-- product top  --> */}
                    <div class="product-Page-Section-Top">
                        {/* <!-- thumbnail start --> */}
                        <div class="thumbnail-Slider">
                            <img src="/assets/img/item-instagram-3.jpg" alt="" />
                            <div class="thumb-Img">
                                <button class="right">
                                    <i class="fal fa-arrow-right"></i>
                                </button>
                                <img class="border-Active" src="/assets/img/item-instagram-2.jpg" alt="" />
                                <img src="/assets/img/item-instagram-2.jpg" alt="" />
                                <img src="/assets/img/item-instagram-2.jpg" alt="" />

                                <button class="left">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                        {/* <!-- product info --> */}
                        <div class="product-Info">
                            {/* <!-- title --> */}
                            <div class="product-Info-Title">
                                <h1>Glorious Eau
                                </h1>
                            </div>
                            <p class="product-Info-Star">
                                <i class="fal fa-star"></i>
                                <i class="fal fa-star-half-alt"></i>
                                <i class="fal fa-star-half-alt"></i>
                                <i class="fal fa-star-half-alt"></i>
                                <i class="fal fa-star-half-alt"></i>

                            </p>
                            <p class="Availability">
                                <span>Availability</span> : <span class="active-Color-Text">iran</span>
                            </p>
                            <p class="product-Info-Price">
                                $45
                            </p>
                            <ul>
                                <li>Vestibulum tortor quam
                                </li>
                                <li> tortor quam
                                </li>
                                <li> quam
                                </li>
                            </ul>
                            {/* <!-- colors --> */}
                            <div class="colors">
                                <span>colors:</span>
                                <div class="colors-Section">
                                    <div class="white"></div>
                                    <div class="black"></div>
                                    <div class="gray"></div>
                                    <div class="gold"></div>
                                </div>

                            </div>
                            {/* <!-- sizes --> */}
                            <div class="size">
                                <p>
                                    size:
                                </p>
                                <div class="size-Section">
                                    <span>x</span>
                                    <span>x</span>
                                    <span>x</span>
                                    <span>x</span>
                                    <span>x</span>
                                    <span>x</span>
                                </div>

                            </div>

                            {/* <!-- like section --> */}
                            <div class="like">
                                <p><i class="fal fa-heart"></i> <span>add to wish list</span></p>
                                <p> <i class="fal fa-pencil-ruler"></i> <span>view siez</span></p>
                            </div>
                            {/* <!-- buy section --> */}
                            <div class="buy">
                            {
                                shoppingStatus==true ?  <div class="count">
                                    <i class="fal fa-plus"></i>
                                    <span>10</span>
                                    <i class="fal fa-minus">

                                    </i>
                                </div> :  <button onClick={()=>addToCart()}>
                                    add to cart
                                </button>
                            }
                               
                            
                            </div>
                        </div>
                    </div>
                    {/* <!-- product bottom --> */}
                    <div class="product-Page-Section-Bottom">
                        <div class="product-Page-Section-Bottom-Header">
                            <h2>descriptions</h2>
                            <h2>information</h2>
                            <h2 class="active-Tab">reviews</h2>
                        </div>
                        <div class="product-Page-Section-Bottom-Content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste ipsum ab, blanditiis voluptas eveniet iure id explicabo alias facere nostrum perspiciatis vero eaque quaerat, tempora repudiandae nesciunt amet quos. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates iste ipsum ab, blanditiis voluptas eveniet iure id explicabo alias facere nostrum perspiciatis vero eaque quaerat, tempora repudiandae nesciunt amet quos. Lorem ipsum dolor sit amet consectetur

                            </p>
                        </div>
                    </div>
                    {/* <!-- offer section --> */}
                    <div class="offer">
                        {/* <!-- Header --> */}
                        <div class="offer-Header">
                            <h2>you may also like this</h2>
                            <div class="under-Line">

                            </div>
                        </div>
                        {/* <!-- offer content --> */}
                        <div class="offer-Content">
                        <ProductCard newPro={true}/>
                        <ProductCard newPro={true}/>
                        <ProductCard newPro={true} />
                        </div>

                    </div>
                </div>
                {/* <!-- product Page side bar -->
                <div class="product-Page-SideBar">
                    <!-- product Page side bar categories -->
                    <!-- <div class="product-Page-SideBar-Categories">
                        <div class="sideBar-Section-Header">
                            <span></span>
                            <h2>categories</h2>
                        </div>
                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />

                            <label for="">
                                new arrivals
                            </label>
                        </div>

                    </div> -->


                    <!-- product page sidebar related -->
                    <!-- <div class="product-Page-SideBar-Product-Related">
                        <div class="sideBar-Section-Header">


                            <span></span>
                            <h2>product related</h2>
                            <i class="fal fa-long-arrow-right"></i>
                            <i class="fal fa-long-arrow-left"></i>

                        </div>
                        <div class="product-Card">
                            <div class="product-Card-Img">
                                <img src="assets/img/banner-home-5.jpg" alt="" />
                                <div class="product-Card-Img-Overlay">
                                    <i class="fa fa-heart-o"></i>
                                    <i class="fa fa-search"></i>
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                            </div>

                            <span class="product-Card-Title">
                                blanch perfume
                            </span>
                            <span class="product-Card-Point">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <span class="product-Card-Price">
                                $46
                            </span>


                        </div>
                    </div> -->
                    <!-- product page testimonials -->
                    <!-- <div class="product-Page-SideBar-Testimonials">
                        <div class="sideBar-Section-Header">
                            <span></span>
                            <h2>testimonials</h2>
                        </div>
                        <div class="commnet-Card">
                            <h2>،،</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, similique eveniet enim officia porro a quo expedita repellendus vero labore iusto sunt inventore voluptas ab quis, necessitatibus maxime reiciendis corrupti!
                            </p>
                            <div class="comment-Card-Person">
                                <img src="assets/img/member2.png" alt="" />
                                <div class="comment-Card-Person-Info">

                                </div>
                            </div>

                        </div>
                    </div> -->
                </div> */}
            </div>
        </>
    );
};

export default ProductPage;