import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppRoot from './components/AppRoot'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>, document.getElementById('react-root')
    )
}

render(AppRoot)

if(module.hot){
    module.hot.accept('./components/AppRoot.js', () => {
        render(require('./components/AppRoot').default)
    })
}