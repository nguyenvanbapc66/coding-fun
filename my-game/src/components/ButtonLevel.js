import React, { Component } from "react";
import { Link } from "react-router-dom";

class ButtonLevel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
        this.clickBtnLevel = this.clickBtnLevel.bind(this)
    }

    clickBtnLevel(e) {
        this.setState({
            clicked: true
        })
    }

    render() {
        let max_level = 1;
        const arr = [
            {
                id: 1,
                title: "level mot",
                order: 1,
            },
            {
                id: 2,
                title: "level hai",
                order: 2,
            },
            {
                id: 3,
                title: "level hai",
                order: 3,
            },
            {
                id: 4,
                title: "level hai",
                order: 4,
            },
            {
                id: 5,
                title: "level hai",
                order: 5,
            },
            {
                id: 6,
                title: "level hai",
                order: 6,
            },
            {
                id: 7,
                title: "level hai",
                order: 7,
            },
            {
                id: 8,
                title: "level hai",
                order: 8,
            },
        ]
        const btn = arr.map((ele, index) => {
            let enable = 'btn-play-level btn-play-level-'
            enable += max_level >= ele.order ? 'enabled' : 'disabled'
            return (
                <Link to="/question1">
                    {
                        this.state.clicked ?
                        ''
                        :
                        <button
                            id={ele.id}
                            className={enable}
                            onClick={this.clickBtnLevel}
                            key={index}>
                                Level{ele.id}
                        </button>
                    }
                </Link>
            )
        })

        return (
            <div className="btn-level">
                {btn}
            </div>
        )
    }
}

export default ButtonLevel;
