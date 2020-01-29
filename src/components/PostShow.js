import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function PostShow (props) {
    console.log(props)
    return (
        <div className = "container box-shadow shadow p-3 mb-5 bg-white rounded">
            { props.post &&
                <div>
                    <div className = "jumbotron">
                        <h1>Post - { props.post.id }</h1>
                        { props.user ? <h4>Author : { props.user.name }</h4> : '' }
                        <h4>Title : { props.post.title }</h4>
                    </div>
                    <h4>Comments :</h4>
                    <ul>
                        {props.comments &&
                            props.comments.map(comment => {
                                return <li key ={comment.id}>{ comment.body }</li>
                            })
                        }
                    </ul>
                    <Link to= {`/users/${props.user.id}`}>More posts from the author</Link><hr/>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const post = state.posts.find(post => post.id == props.match.params.id)
    if (post) {
        const user = state.users.find(user => user.id == post.userId)
        const comments = state.comments.filter(comment => comment.postId == post.id)
        return {
            post, user, comments
        }
    }
}

export default connect(mapStateToProps)(PostShow)