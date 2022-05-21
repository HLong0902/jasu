import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppLayout from "./components/layout/AppLayout";
import AddUser from "./pages/admin/AddUser";
import ClassControl from "./pages/admin/ClassControl";
import UserControl from "./pages/admin/UserControl";
import FindClass from "./pages/user/FindClass";
import FindJasu from "./pages/user/FindJasu";
import Homepage from "./pages/user/Homepage";
import Login from "./pages/user/Login";
import Signup from "./pages/user/SignUp";
import User from "./pages/user/UserInfo";
// import * as userService from "./services/UserService"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/findJasu" element={<FindJasu />} />
          <Route path="/findClass" element={<FindClass />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userControl" element={<UserControl />} />
          <Route path="/classControl" element={<ClassControl />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
