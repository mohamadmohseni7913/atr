import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div className='w-[25%] bg-white'>
            {/* sidebar main section */}
            <div className=' border-[1px] border-[#ab8e66]  rounded-[10px]  py-[15px]'>
                {/* side bar header  */}
                <div className='   px-[20px] '>
                    <div className='border-b-[1px] py-[10px] flex flex-row justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <img className='w-[50px]' src="/assets/img/user.png" alt="" />
                            <p className='flex flex-col px-[5px]'>
                                <span>محمد محسنی</span>
                                <span>09338697097</span>
                            </p>
                        </div>
                        <button className='hover:bg-white hover:text-[#ab8e66]'><i className='fa fa-pen'></i></button>
                    </div>

                </div>
                {/* main section content */}
                <div className='flex-flex-col'>
                    {/* main section content list  */}
                    <ul>
                        {/* items */}
                        <Link to={"/"}>
                            <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                                <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                    <i className='fal fa-home text-[25px]'></i>
                                    <span className='px-[5px]'>خلاصه وضعیت</span>
                                </div>
                            </li>
                        </Link>
                        <Link to={"/user/orders"}>
                        <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-shopping-bag text-[25px]'></i>
                                <span className='px-[5px]'>سفارش ها </span>
                            </div>
                        </li>
                        </Link>
                        <Link to={"/user/comment"}>
                        <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-comment text-[25px]'></i>
                                <span className='px-[5px]'>دیدگاه ها</span>
                            </div>
                        </li>
                        </Link>
                        <Link to={"/user/address"}>
                        <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-location text-[25px]'></i>
                                <span className='px-[5px]'>آدرس ها </span>
                            </div>
                        </li>
                        </Link>
                        <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-comments text-[25px]'></i>
                                <span className='px-[5px]'>پیغام ها</span>
                            </div>
                        </li>
                        <Link to={"/user/info"}>
                        
                        <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-info text-[25px]'></i>
                                <span className='px-[5px]'>اطلاعات حساب کاربری </span>
                            </div>
                        </li>
                        </Link>
                         <li className='w-[100%] hover:bg-slate-100 px-[20px]'>
                            <div className='flex  py-[20px] items-center border-b-[1px] ' >
                                <i className='fal fa-sign-out text-[25px]'></i>
                                <span className='px-[5px]'>خروج</span>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default UserSidebar;