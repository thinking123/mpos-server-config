import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import {toLocalDatetime} from 'src/utils/util'
import css from './Footer.less'

const getUserInfo = user =>{
    return user
}


const mapStateToProps = state => {
    return {
        user: getUserInfo(state.user)
    }
}


const Footer = ({user})=>{
    let {loginDate ,logoutDate} = user
    loginDate = toLocalDatetime(loginDate)
    logoutDate = toLocalDatetime(logoutDate)
    return (
    <div className={css.wrap}>
       <div className={css.company}>
           Copyright ©  2017 hd123.com  All Rights Reserved   上海海鼎信息工程股份有限公司
       </div>
        <div className={css.info}>
            <div>
                last logout time : {loginDate}
            </div>
            <div>
                current login time : {logoutDate}
            </div>
        </div>

    </div>
)}


export default connect(mapStateToProps)(Footer)