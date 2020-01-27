import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow (props) {

    return (
        <div className = "container">
             { props.user && 
            <div>
            <h2><span className="badge badge-secondary">Name : { props.user.name }</span></h2><hr/>
            <ul>
                {
                   props.posts.map(post => {
                       return <li key ={ post.id }><Link to = {`/posts/${post.id}`}>{ post.title }</Link> </li>
                   }) 
                }
            </ul><hr/>
        </div>
        }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user : state.users.find(user => user.id == props.match.params.id),
        posts : state.posts.filter(post => post.userId == props.match.params.id )
    }
}

export default connect(mapStateToProps)(UserShow)