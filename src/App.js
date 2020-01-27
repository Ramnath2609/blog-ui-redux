import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './Home'
import UsersList from './components/UsersList'
import PostsList from './components/PostsList'
import PostShow from './components/PostShow'
import UserShow from './components/UserShow'

function App (props) {
    return (
        <BrowserRouter>
            <Link to ='/'>Home  |</Link>
            <Link to = '/users'> Users  |</Link>
            <Link to = '/posts'> Posts  |</Link>

            <Route exact path = '/' component = { Home } />
            <Route exact path = '/users' component = { UsersList } />
            <Route path = '/users/:id' component = { UserShow } />
            <Route exact path = '/posts' component = { PostsList } />
            <Route path = '/posts/:id' component = { PostShow } />
        </BrowserRouter>
        
    )
}

export default App