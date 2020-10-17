import React, { Component } from 'react'
import logout from '../../assets/log-out.png'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        localStorage.removeItem('namePlayer')
        this.props.updateNamePlayer('')
        this.props.updateClickedBtn(0)
    }

    render() {
        return (
            <div className="auth">
                <span className="username">{localStorage.getItem('namePlayer')}</span>
                <img className="log-out" src={logout} onClick={this.logOut} />
            </div>
        )
    }
}

export default Auth