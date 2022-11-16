import React from 'react'

function User(props) {

const {
    details
} = props;

    return (
        <div className='user container'>
            <h2>First Name: {details.first_name}</h2>
            <h2>Last Name: {details.last_name}</h2>
            <h2>Email: {details.email}</h2>
            
            
        </div>
    )
}

export default User;