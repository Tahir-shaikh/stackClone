import React from 'react'
import {useSelector} from 'react-redux'
import {User} from './User'
import './Users.css'
export const UsersList = () => {

    const users = useSelector((state) => state.usersReducer)
    // console.log(users)
  return (
    <div>
        <div className="userList-container">
            {
                users.map((user) => (
                    <User user={user} key={user?._id} />
                ))
            }
        </div>
    </div>

    )
}
