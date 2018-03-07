import React, { Component } from 'react'

import Routes from '../components/Routes'
import Header from '../components/Header'

import 'normalize.css'
import '../styles/styles.scss'

class AppRoot extends Component {

    render () {
        return (
            <div>
                <Header />
                <Routes />
            </div>
        )
    }
}

export default AppRoot