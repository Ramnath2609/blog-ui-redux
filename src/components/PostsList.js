import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PostsList (props) {

    return (
        <div className = "container">
            <h1>Listing posts - { props.posts.length }</h1>
            <ol>
                {
                    props.posts.map(post => {
                        return <li key = { post.id }><Link to = {`/posts/${post.id}`}>{ post.title }</Link></li>
                    })
                }
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(PostsList)