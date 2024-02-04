import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarCom from "../Components/navbar";
import TableCom from "../Components/user/table"


function App() {
  return (
    <BrowserRouter>
    <NavbarCom/>
    <Routes>
      <Route path='/' element = { <TableCom/> } />
      <Route path='user' element = { <h1>User</h1> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
