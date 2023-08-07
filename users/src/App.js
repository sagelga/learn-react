import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import InputCard from "./components/InputCard";
import UserList from "./components/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [modalMessage, setModalMessage] = useState("");

  const addUserHandler = (data) => {
    setUserList([...userList, data]);
  };

  const deleteUserHandler = (key) => {
    setUserList(userList.filter((user) => user.key !== key));
  };

  const inputInvalidHandler = (message) => {
    console.log(message);
    setModalMessage(message);
  };

  const hideModalHandler = (message) => {
    setModalMessage("");
  };

  return (
    <div className="App">
      <InputCard
        addUserHandler={addUserHandler}
        inputInvalidHandler={inputInvalidHandler}
      />
      <UserList userList={userList} deleteUserHandler={deleteUserHandler} />
      <Modal modalMessage={modalMessage} hideModalHandler={hideModalHandler} />
    </div>
  );
};

export default App;
