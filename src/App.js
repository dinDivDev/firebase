import "./App.css";
import Avengers from "./components/avengers/Avengers";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ToDoFireBase from "./components/toDoComponent/ToDoFireBase";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/todoapp" element={<ToDoFireBase />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
