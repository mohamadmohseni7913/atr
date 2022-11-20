
import React, { useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AboutUs from './theme/aboutUs/AboutUs';
import GetProduct from './theme/api/product/GetProduct';
import GetAddress from './theme/api/user/GetAddress';
import GetUser from './theme/api/user/GetUser';
import Footer from './theme/component/footer/Footer';
import Header from './theme/component/header/Header';
import Page404 from './theme/Page404/Page404';
import ProductPage from './theme/productPage/ProductPage';
import ShoppingCart from './theme/ShoppingCart/ShoppingCart';
import SingUp from './theme/singUp/SingUp';
import SiteIndex from './theme/siteIndex/SiteIndex';
import UserIndex from './theme/user/UserIndex';
import { Provider } from 'react-redux';
import  configure  from './store/configure';


const App = () => {
    // useEffect(() => {
    //     GetProduct((isoke, data) => {

    //     })
    //     GetUser(1, (isoke, data) => {

    //     })
    //     GetAddress(1, (isoke, data) => {

    //     })
    // }, [])
    //store
    const store= configure();
    return (
        <Provider store={store}>
            <div className='main'>
              
                <BrowserRouter>
                <Header />
                    <Routes>

                        <Route index path="/" element={<SiteIndex />} />
                        <Route path="/ShoppingCart" element={<ShoppingCart />} />
                        <Route path="/ProductPage/:id" element={<ProductPage />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/user/*" element={<UserIndex />} />
                        <Route path="/login" element={<SingUp />} />
                        <Route path='*' element={<Page404 />} />

                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
            
        </Provider>

    );
};

export default App;