import React, {Component, PropTypes} from 'react';
import css from './Login.css'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            account:props.account,
            password:'',
            onLogInClick:props.onLogInClick
        }
    }

    handleSubmit = ()=>{
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
                <div>
                    CRE Server
                </div>

                <div className={css.login}>
                    <input type="text" value={account} placeholder="username" name="account" onChange={this.handleChange}/>
                    <input type="password"  value={password}  placeholder="password" name="password" onChange={this.handleChange}/>
                    <button  value="Login" onClick={this.handleSubmit}>
                    </button>
                </div>
            </div>
        )
    }
}




