import React, { Component } from 'react'

class ButtonLevel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            level1: 0,
            level2: 0,
            level3: 0,
            level4: 0,
            level5: 0,
            level6: 0,
            level7: 0,
            level8: 0,
        }
    }

    clickLevel() {
        console.log('clicked')
    }

    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const btn = arr.map((ele, index) => (<button onClick={this.clickLevel} key={index}>Level {ele}</button>))
        return (
            <div className="btn-level">
                {btn}
            </div>
        )
    }
}

export default ButtonLevel