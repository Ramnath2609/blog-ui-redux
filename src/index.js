import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import App from './App'
import { startGetUsers } from './actions/users'
import { Provider } from 'react-redux'
import { startGetPosts } from './actions/posts'
import { startGetComments } from './actions/comments'



const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const ele =(
    <Provider store = { store }>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))