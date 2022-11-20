import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Address from './address/Address';
import Comment from './Comments/Comment';
import Orders from './orders/Orders';
import PersonalInfo from './personalInfo/personalInfo';

const UserDashboard = (props) => {
   
    return (
        <div className='w-[74%] ' >
    
           <Routes>
               <Route path='/orders' element={<Orders/>} />
               <Route path='/comment' element={<Comment/>} />
               <Route path='/address' element={<Address/>} />
               <Route path='/info' element={<PersonalInfo/>} />
           </Routes>
            

        
        </div>

    );
};

export default UserDashboard;