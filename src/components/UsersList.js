import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function UsersList (props) {


    return (
        <div className ="container">
            <h1>Listing users - { props.users.length }</h1>
            <div className = "list-group">
                <ul>
                    {
                        props.users.map(user => {
                            return <li key ={user.id} className ="list-group-item"><Link to = {`/users/${user.id}`}>{ user.name }</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(UsersList)