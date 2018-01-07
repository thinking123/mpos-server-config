import React, {Component, PropTypes} from 'react';
import css from './Login.css'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            account:props.user.account,
            password:'',
            onLogInClick:props.onLogInClick
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {onLogInClick , account , password} = this.state

        onLogInClick({
            account,
            password
        })
    }
    // state = {
    //     account:'',
    //     password:''
    // }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {account , password} = this.state
        return (
            <div className={css.wrap}>
                <div className={css.formWrap}>
                    <div className={css.title}>
                        CRE Server
                    </div>

                    <form className={css.login} onSubmit={this.handleSubmit} >
                        <input type="text" value={this.state.account} placeholder="用户名" name="account" onChange={this.handleChange}/>
                        <input type="password"  value={this.state.password}  placeholder="密码" name="password" onChange={this.handleChange}/>
                        <input  value="Login" type="submit"/>
                    </form>
                </div>

            </div>
        )
    }
}




