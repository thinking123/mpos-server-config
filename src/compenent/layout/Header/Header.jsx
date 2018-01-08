import React, { Component, PropTypes } from 'react';
import css from './Header.css'


 const Header = ({user , onLogOutClick})=>(
     <div className={css.wrap}>
         <h1>
             CRE Server
         </h1>
         <div className={css.userInfoWrap}>
             <div>
                 user.account
             </div>
             <button onClick={()=>onLogOutClick(user)}>
                 LogOut
             </button>
         </div>
     </div>
 )


export default Header