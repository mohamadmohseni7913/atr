import React, { useState } from 'react';
import SignUp from '../api/SignUp/SingUp';
import { AiOutlineGoogle } from "react-icons/ai";

const SingUp = () => {
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const send = () => {

        const user = {
            phone,
            password,
        }
        SignUp(user, (isoke, data) => {

        })
    }
    return (
        <>
            <div className='login'>
                {/* Sing up section */}
                <div className='signUp'>
                    {/* header */}
                    <div className='signUp-Header'>
                        login your account
                    </div>
                    {/* content section */}
                    <div className='signUp-Content'>
                        {/* login with google account */}
                        <div className='flex flex-col pt-[10px] items-center'>
                            <p className='text-[#b7b6b6] text-[12px]'>loign with google account</p>
                            <AiOutlineGoogle />
                        </div>
                        <label htmlFor="">userName</label>
                        <input id='userName' onChange={e => setPhone(e.target.value)} type="text" />
                        <label htmlFor="">password</label>
                        <input onChange={e => setPassword(e.target.value)} type="text" />
                        {/* remember me */}
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center'>
                                <input type="checkbox" name="" id="" />
                                <label className='opacity-[0.5]' htmlFor="">remeber me</label>
                            </div>
                            <a className='text-[14px] underline' href="#">forgot password?</a>
                        </div>
                        <button onClick={send}>login</button>
                    </div>

                </div>
                {/* sing in section */}
                <div className='signUp'>
                    {/* header */}
                    <div className='signUp-Header'>
                        register now
                    </div>
                    {/* content section */}
                    <div className='signUp-Content'>
                        <label htmlFor="">your email</label>
                        <input id='userName' onChange={e => setPhone(e.target.value)} type="text" />
                        <label htmlFor="">userName</label>
                        <input onChange={e => setPassword(e.target.value)} type="text" />
                        <label htmlFor="">password</label>
                        <input onChange={e => setPassword(e.target.value)} type="text" />  {/* remember me */}
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center'>
                                <input type="checkbox" name="" id="" />
                                <label className='opacity-[0.5]' htmlFor=""> i agree  <span>terms & condition</span></label>
                            </div>
                        </div>
                        <button onClick={send}>register now</button>
                    </div>

                </div>
            </div>

        </>

    );
};

export default SingUp;