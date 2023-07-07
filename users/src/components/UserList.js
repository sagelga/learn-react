import React from 'react';
const UserList = (props) => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {props.userList.map((user) => (
                    <li key={user.key}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
