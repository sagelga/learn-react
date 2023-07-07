import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import InputCard from './components/InputCard';
import UserList from './components/UserList';

const App = () => {
    const [userList, setUserList] = useState([]);

    const submitHandler = (data) => {
        setUserList([...userList, data]);
    };

    return (
        <div className="App">
            <InputCard submitHandler={submitHandler} />
            <UserList userList={userList} />
            <Modal />
        </div>
    );
};

export default App;
