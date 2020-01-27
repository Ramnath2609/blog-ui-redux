import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'
// import multi from 'redux-multi'
import commentsReducer from '../reducers/commentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer 
    }), applyMiddleware(thunk))
    return store
}

export default configureStore