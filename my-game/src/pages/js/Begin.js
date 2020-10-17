import React, { Component } from 'react'

class Begin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: 0
        }
        this.btnHandleClick = this.btnHandleClick.bind(this)
        this.enter = this.enter.bind(this)
    }

    enter(e) {
        this.props.updateNamePlayer(e.target.value)
        localStorage.setItem('namePlayer', e.target.value)
        if(e.keyCode === 13) {
            this.btnHandleClick()
        }
    }

    btnHandleClick() {
        const newPoint = this.props.clickedBtn + 1
        this.props.updateClickedBtn(newPoint)
        this.setState({
            clicked: newPoint
        })
    }

    render() {
        const isAuthenticated = localStorage.getItem('namePlayer') ? true : false

        return (
            <div>
                {
                    isAuthenticated && this.props.clickedBtn
                    ?
                    ' '
                    :
                    <div className="page-begin">
                        <input className="input-begin" placeholder="Enter your name player" onKeyUp={this.enter} />
                        <button className="btn-start" onClick={this.btnHandleClick}>Start</button>
                    </div>
                }
            </div>
        )
    }
}

export default Begin