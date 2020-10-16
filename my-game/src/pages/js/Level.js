import React, { Component } from 'react'
import ButtonLevel from '../../components/ButtonLevel'
import Auth from './Auth'

class Level extends Component {
    render() {
        return (
            <div>
                { this.props.clickedBtn && this.props.namePlayer ? 
                    (
                        <span>
                            <ButtonLevel />
                            <Auth 
                                updateNamePlayer={this.props.updateNamePlayer} 
                                updateClickedBtn={this.props.updateClickedBtn}
                                namePlayer={this.props.namePlayer} 
                            />
                        </span>
                    ) 
                    : ''
                }
            </div>
        )
    }
}

export default Level