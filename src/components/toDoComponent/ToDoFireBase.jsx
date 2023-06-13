import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore/lite";

const ToDoFireBase = () => {
  const [value, setValue] = useState("");
  const [valueList, setValueList] = useState([]);

  //   connecting with db and retrieving data

  const getAllToDoS = async () => {
    try {
      // init a name of the collection that we have created in the firebase
      const todosCollection = collection(db, "todolist");

      //   get data after the init from the db
      const todosSnapShot = await getDocs(todosCollection);

      //pulling fields data from the db
      const todoList = todosSnapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      console.log(" todolist  : ", todoList);
      setValueList(todoList);
    } catch (err) {
      console.log("error", err);
    }
  };

  //    making sure thats the db runs at least one (square [])
  useEffect(() => {
    getAllToDoS();
    console.log("useEffect running");
  }, []);

  const onChangleHandler = (e) => {
    setValue(e.target.value);
  };

  const onClickHandler = async () => {
    try {
      const addingToDo = {
        text: value,
        isCompleted: false,
      };

      const todoCollection = collection(db, "todolist");
      await addDoc(todoCollection, addingToDo);
      await getAllToDoS();
      setValue("");
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const onCheckBoxClick = async (todoIDCheckBox) => {
    try {
      const updatingToDoCheckBox = doc(db, "todolist", todoIDCheckBox);
      await setDoc(
        updatingToDoCheckBox,
        { isCompleted: true },
        { merge: true }
      );
      await getAllToDoS();
    } catch (err) {}
  };

  const onDeleteClick = async (todoID) => {
    try {
      await deleteDoc(doc(db, "todolist", todoID));
      await getAllToDoS();
    } catch (err) {
      console.log(err);
    }
  };

  const renderToDo = valueList.map((el, index) => {
    return (
      <div className="todo-container__list-view" key={index}>
        <input
          type="checkbox"
          checked={el.isCompleted}
          onChange={() => onCheckBoxClick(el.id)}
        ></input>
        <p>{el.text}</p>
        <button onClick={() => onDeleteClick(el.id)}>X</button>
      </div>
    );
  });

  return (
    <div className="todo-container">
      <input
        placeholder="enter your todo"
        value={value}
        onChange={onChangleHandler}
      ></input>
      <button onClick={onClickHandler}>ADD</button>
      {renderToDo}
    </div>
  );
};

export default ToDoFireBase;
