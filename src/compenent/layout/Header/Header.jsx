import React, {Component, PropTypes} from 'react'
import HeaderMenu from './HeaderMenu'
import {Icon} from 'antd'
import css from './Header.less'

//
// class Header extends Component {
//
//     state = {
//         isShow:this.props.isShow
//     }
//
//     onToggleSideBarClick = (isShow)=>{
//         console.log("isShow" , isShow)
//     }
//
//     render() {
//         const {isShow} = this.props
//         return (
//             <div className={css.wrap}>
//                 <div>
//                     <h1>
//                         CRE Server
//                     </h1>
//                     {isShow ? <Icon type="menu-fold" onClick={this.onToggleSideBarClick}/> :
//                         <Icon type="menu-unfold" onClick={this.onToggleSideBarClick}/>}
//                 </div>
//
//                 <div className={css.userInfoWrap}>
//                     <HeaderMenu {...this.props}/>
//                 </div>
//             </div>
//         )
//     }
//
// }

const Header = (props) => {
    const {isShow, onToggleSideBarClick} = props

    return (
        <div className={css.wrap}>
            <div className={css.titleWrap}>
                <h1>
                    CRE Server
                </h1>
                <div onClick={onToggleSideBarClick}>
                    {isShow ? <Icon type="menu-fold"/> :
                        <Icon type="menu-unfold"/>}
                </div>

            </div>

            <div className={css.userInfoWrap}>
                <HeaderMenu {...props}/>
            </div>
        </div>
    )


}
export default Header