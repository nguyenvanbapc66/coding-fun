import React, { Component } from 'react'

class ButtonLevel extends Component {

    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const btn = arr.map((ele, index) => (<button key={index}>Level {ele}</button>))
        return (
            <div className="btn-level">
                {btn}
            </div>
        )
    }
}

export default ButtonLevel