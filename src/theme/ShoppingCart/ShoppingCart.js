import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRemoved,productMilHandler } from '../../store/shoppingBasket';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const producs = useSelector(state => state.entities.basket.list)
    // product mill handler
    const millHandler=(type,id)=>{
        dispatch(productMilHandler(type,id))
    }
    return (
        <>
            <section class="shopping-Cart-Page m-[20px]">
                <h2>shopping cart </h2>
                {/* <!-- shopping cart page  section --> */}
                <div class="shopping-Cart-Page-Section">
                    {/* <!-- shopping cart page section Product --> */}
                    {
                        producs.length > 0 ? producs.map(item =>
                            <div class="shopping-Cart-Page-Section-Product">
                                <div class="shopping-Cart-Page-Section-Product-Img">
                                    <img src="assets/img/item-instagram-1.jpg" alt="" />

                                </div>
                                <p class=" shopping-Cart-Page-Section-Product-Detail">
                                    <span>{item.name}</span>
                                    <span> {item.mil} mil</span>
                                </p>
                                <p class="shopping-Cart-Page-Section-Product-Counter">
                                    <i onClick={()=>millHandler('minus',item.id)} class="fa fa-minus"></i>
                                    {/* <input id='mil'  className=' border-none hover:border-none focus:border-none' type="number" min={10}  placeholder="10" /> */}
                                    <div id='count'>10</div>
                                    <i onClick={()=>millHandler('plus',item.id)}  class="fa fa-plus"></i>
                                </p>
                                <p class="shopping-Cart-Page-Section-Product-Counter">

                                    <i class="fa fa-minus"></i>
                                    {/* <input id='mil'  className=' border-none hover:border-none focus:border-none' type="number" min={10} /> */}
                                    <div>10</div>
                                    <i  class="fa fa-plus"></i>
                                </p>
                                <p class="shopping-Cart-Page-Section-Product-Price">
                                    <span>$</span>
                                    <span>130</span>
                                </p>
                                <button onClick={() => dispatch(productRemoved({ id: item.id }), console.log('log pro', producs))} >
                                    <i class="fal fa-trash-alt"></i>
                                </button>

                            </div>
                        ) :
                            //null basket 
                            <div className='flex items-center justify-center p-[100px] active-Color-Text' >
                                <h1>محصول انتخاب نشده است</h1>
                            </div>
                    }


                </div>
            </section>
        </>
    );
};

export default ShoppingCart;