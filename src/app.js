import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { AppContainer } from 'react-hot-loader'
import AppRoot from './components/AppRoot'


const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>, document.getElementById('react-root')
    )
}

render(AppRoot)

if(module.hot){
    module.hot.accept('./components/AppRoot.js', () => {
        render(require('./components/AppRoot').default)
    })
}