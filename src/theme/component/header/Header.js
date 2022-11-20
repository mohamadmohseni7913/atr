import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, Router } from 'react-router-dom';
import { producteAdded, productRemoved } from '../../../store/shoppingBasket';
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

const Header = (props) => {
    // handler menu categori
    
    const products = useSelector(state => state.entities.basket.list)
    // userSeection control
    const [userSectionStatuse, setUserSectionStatuse] = useState(false)
    const userSectionHandl = () => {
        if(userSectionStatuse==false){
            setUserSectionStatuse(true)
            return;
        }
      else if(userSectionStatuse==true){
            setUserSectionStatuse(false)
            return;
        }
    }
    return (
        <>
            <header>
                {/* <!-- top bar --> */}
                <div class="top-Bar ">
                    <p>
                        <a href="# ">ورود</a>
                        <span>|</span>
                        <a href="# ">ثبت نام</a>
                    </p>

                    <p>به فروشگاه عطر امروز خوش آمدید

                    </p>
                </div>
                {/* <!-- middle bar --> */}
                <div class="middle-Bar ">
                    {/* <!-- middle bar logo --> */}
                    <div class="logo ">
                        <Link to={'/'}>
                            <img src="/assets/img/logo.png" alt="logo" />

                        </Link>
                    </div>
                    {/* <!-- middle bar search --> */}
                    <div class="search-Bar ">
                        <i class="fa fa-search"></i>
                        <div class="categories">
                            <i class="fal fa-angle-down"></i>
                            <span>دسته بندی ها</span>
                        </div>
                        <input type="text" placeholder="دنبال چه میگردید؟" />
                    </div>
                    {/* <!-- middle bar user manage --> */}
                    <div class="user-Manage ">
                        {/* <!-- user manage shopping --> */}
                        <div class="user-Manage-Shopping">
                            <Link to={"/ShoppingCart"} >
                                <AiOutlineShopping />
                            </Link>
                            {/* <!-- user manage shopping cart --> */}
                            <div class="user-Manage-Shopping-Cart">
                                {/* <!-- user manage shopping cart title --> */}
                                <span class="title">shopping cart</span>
                                <div class="user-Manage-Shopping-Cart-List">
                                    {
                                        products.map(item =>
                                            <div class="user-Manage-Shopping-Cart-List-Product">
                                                <img src="/assets/img/item-instagram-2.jpg" alt="" />
                                                <div class="user-Manage-Shopping-Cart-List-Product-Detail">
                                                    <a href="#">{item.name} </a>
                                                    <span>black : {item.mil} mil</span>
                                                    <p><span>$45(*1)</span> <i class="fa fa-trash-o"></i></p>
                                                </div>
                                            </div>
                                        )
                                    }



                                </div>
                                <p class="total">
                                    <span class="total-Title">Subtotal:</span>
                                    <span class="total-Value">$l35</span>
                                </p>
                                {/* <!-- user manage shopping cart btn --> */}
                                <div class="user-Manage-Shopping-Cart-Btn">
                                    <button>CHECKOUT</button>
                                    <button> view page</button>

                                </div>
                            </div>
                        </div>
                        <div class="user-Manage-Login">
                            {/* <Link to={'/user/dashboard'}>
                            <AiOutlineUser/>
                            </Link> */}
                            <span onClick={() => userSectionHandl(true)}>
                                <AiOutlineUser />
                            </span>
                            {
                                userSectionStatuse == true ?
                                    <div class="user-Manage-Login-Section">
                                        <div class="title">
                                            <span>sign in</span>
                                            <span>sing up</span>
                                        </div>
                                        <input type="email" placeholder="email" />
                                        <input type="password" placeholder="password" />
                                        <p><input className='!mx-[5px]' type="checkbox" /> <span className='text-[12px]'>remember me</span></p>
                                        <button className='rounded-[3px] text-white '>login</button>
                                        <a href="#">forget password</a>

                                    </div> : null
                            }


                        </div>
                    </div>

                </div>
                <nav class="nav-Bar ">
                    <button>
                        <div class="icon-Bar">
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>همه ی دسته بندی ها

                    </button>
                    <ul>
                        <li><a href="#">خانه</a> <i class="fal fa-angle-down"></i>
                        </li>
                        <li><a href="#">صفحه ها</a> <i class="fal fa-angle-down"></i>
                        </li>
                        <li><a href="#"> بلاگ </a> <i class="fal fa-angle-down"></i>
                        </li>
                        <li><a href="#">تماس با ما</a> <i class="fal fa-angle-down"></i>
                        </li>
                        <li><a href="#">درباره ما</a> <i class="fal fa-angle-down"></i>
                        </li>

                    </ul>

                </nav>
            </header>
        </>
    );
};

export default Header;