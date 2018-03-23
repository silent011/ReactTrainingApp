import React, { Component } from 'react'

class InfoBox extends Component {

    componentWillUpdate(nextProps) {
        if(nextProps.msg !== ''){
            setTimeout(() => {
                this.props.clearMessage()
            }, 3000);
        } 
    }
    render () {
        if(this.props.msg)
            return (
                <div className="info-box">
                    <h2>{this.props.msg}</h2>
                </div>
            )
        return null
    }
}

export default InfoBox 