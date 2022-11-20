
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loadBugs } from '../../store/bug';
import { producteAdded} from '../../store/shoppingBasket';

import UserDashboard from './UserDashboard/UserDashboard';
import UserSidebar from './userSideBar/UserSidebar';

const UserIndex = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadBugs())

  },[])
    return (

        <div className='flex justify-between px-[15%] py-[40px] '>
            {/* prodile sidebar */}
            <UserSidebar />

            {/* profile dashboard */}
            <UserDashboard/>
      
        </div>

    );
};

export default UserIndex;