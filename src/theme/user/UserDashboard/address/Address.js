import React, { useState } from 'react';
import AddAddress from '../../../api/address/AddAdress';

const Address = () => {
    const [Address, setAddress] = useState();
    const [newState, setNewState] = useState();
    const [city, setCity] = useState();
    const [pelak, setPelak] = useState();
    const [unity, setUnity] = useState();
    const [postalCode, setPostalCode] = useState();
    const send = () => {
        const address = {
            address: Address,
            state: newState,
            city,
            plaque: pelak,
            unity,
            postal_code: postalCode


        }
        AddAddress(1, address, (isoke, data) => {

        })

    }
    return (
        <div className=' border-[2px] rounded-[10px]   py-[20px] px-[15px] '>
            {/* user dashboard section header */}
            <div className='flex justify-between items-center' >
                <h2 className='border-b-[2px] border-[#ef394e] w-max border-red'>آدرس ها </h2>
                <button className='  p-[10px]  text-[14px] '> <i className='fal fa-location mx-[5px]'></i> ثبت آدرس جدید</button>
            </div>
            {/* address content section */}
            <div className='border-b-[1px] py-[10px]'>
                {/* address content section header */}
                <div className=' flex items-center justify-between'>
                    <p className='w-max'>کرج،جهانشهر، خ. شهید بهشتی، بعد از م. سپاه، خ. گلستان</p>
                    <button><i className='fa fa-ellipsis-v'></i></button>
                </div>
                {/* address section content detail */}
                <div className='flex'>
                    <ul className='text-[20px]'>
                        <li><i className='fal fa-location'></i></li>
                        <li><i className='fal fa-envelope'></i></li>
                        <li><i className='fal fa-phone-alt'></i></li>
                        <li><i className='fal fa-user-alt'></i></li>
                    </ul>

                </div>
                
            </div>
            {/* add new  address box */}
            <div className=' flex justify-between items-center flex-wrap py-[20px] px-[10px]  '>
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text" placeholder='آدرس' />
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text"placeholder='استان' />
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text" placeholder='شهر' />
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text" placeholder='پلاک' />
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text" placeholder='واحد' />
                <input className='w-5/12 my-[10px] border-[1px] border-[#ab8e66]' type="text" placeholder='کد پستی' />
                <div className='w-[100%] flex justify-end padding my-[20px] '>
                    <button className='w-[150px]'>ثبت</button>
                </div>
            </div>
        </div>
    );
};

export default Address;