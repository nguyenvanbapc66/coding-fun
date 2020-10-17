import React, { Component } from 'react'

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
                <span>{localStorage.getItem('namePlayer')}</span>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        )
    }
}

export default Auth