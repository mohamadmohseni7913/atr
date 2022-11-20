import React, { useEffect } from 'react';
import DealOfDay from "../component/dealOFDay/DealOfDay";
import BannerSlider from "../component/Banner/BannerSlider"
import Collection from "../component/collection/Collection";
import ProductFilter from "../component/ProductFilter/ProductFilter";
import MainBlog from "../component/mainBlog/MainBlog"
import InstagramFeed from "../component/instagramFeed/InstagramFeed";
import { useDispatch } from 'react-redux';
import { productRecieved } from '../../store/ProductReducer';

// this is sample products
const product =[
    {
        id:1,
        name:"atr 1",
        code:1216,
        mil:120,
        link:1

    },
    {
        id:2,
        name:"atr 2",
        code:1216,
        mil:130,
        link:2
    },
    {
        id:3,
        name:"atr 3",
        code:1216,
        mil:140,
        link:3

    },
    {
        id:4,
        name:"atr 4",
        code:1216,
        mil:150,
        link:4

    },
    {
        id:5,
        name:"atr 5",
        code:1216,
        mil:160,
        link:5

    },
    {
        id:6,
        name:"atr 6",
        code:1216,
        mil:170,
        link:6

    },
]


const SiteIndex = () => {
    const disPatch=useDispatch()
    useEffect(()=>{
        disPatch(productRecieved(product))
    },[])

    return (
        <>
 
            <BannerSlider />
            <DealOfDay />
            <Collection />
            <ProductFilter />
            <MainBlog />
            <InstagramFeed />

        </>
    )
}

export default SiteIndex;