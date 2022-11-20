import React from 'react';
import { PopUp } from './PopUp';

const PersonalInfo = () => {
    return (
        // presonal info
        <div className=' flex flex-wrap border-[1px] rounded-[10px]'>
            {/* personaol info sections */}
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7] text-[14px]'>نام و نام خانوادگی</span>
                    <span>محمد محسنی</span>
                   {/* <input className='h-[20px] border-none hover:border-none focus:border-none ' type="text" value={"محمد محسنی"} /> */}
                </p>
                {/* <input type="text" className='border-none hover:border-none focus:border-none flex-1  ' /> */}
                <button onClick={()=>PopUp("نام خود را وارد کنید",null,"text")} className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil '></i>
                </button>
            </div>
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7] text-[14px]'> کد ملی</span>
                    <span>محمد محسنی</span>
                </p>
                <button onClick={()=>PopUp("کد ملی را وارد کنید",null,"number")} className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil '></i>
                </button>
            </div>
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7]'>شماره موبایل</span>
                    <span>محمد محسنی</span>
                </p>
                <button onClick={()=>PopUp("شماره خود را وارد کنید",null,"number")} className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil'></i>
                </button>
            </div>
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7] text-[14px]'> ایمیل  </span>
                    <span>محمد محسنی</span>
                </p>
                <button onClick={()=>PopUp("ایمیل خود را وارد کنید",null,"email")} className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil'></i>
                </button>
            </div>
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7] text-[14px]'> رمز عبور</span>
                    <span> *********</span>
                </p>
                <button onClick={()=>PopUp("رمز عبور خود را وارد کنید",null,"password")} className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil'></i>
                </button>
            </div>
            <div className='w-[50%] flex justify-between items-center p-[10px] py-[20px] border-b-[1px] border-l-[1px]'>
                <p className='flex flex-col '>
                    <span className='opacity-[0.7] text-[14px]'> تاریخ تولد  </span>
                    <span> 0/0/0/</span>
                </p>
                <button className='hover:bg-white hover:text-[#ab8e66]'>
                    <i className='fal fa-pencil'></i>
                </button>
            </div>
        </div>
    );
};

export default PersonalInfo;