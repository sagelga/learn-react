import React from 'react';
import Card from './Card';

const UserList = (props) => {
    return (
        <ul>
            {props.userList.map((user) => (
                <Card onClick={() => props.deleteUserHandler(user.key)}>
                    <li key={user.key}>
                        {user.username} ({user.age} years old)
                    </li>
                </Card>
            ))}
        </ul>
    );
};

export default UserList;
