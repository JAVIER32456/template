import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Followup from "./pages/followup/Followup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./style/dark.css"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode";
import LoginUser from "./pages/loginuser/LoginUser";

function App() {
  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={ darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
    
            <Route path="/"> 
              <Route path="/login" element={<Login/>} />
              <Route index element={<Home/>}/>
              <Route path="users"> 
                <Route index element={<List/>}/>
                <Route path=":userId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
              <Route path="academico"> 
                <Route index element={<Followup/>}/>
                <Route path=":seguimiento" element={<Followup/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
              <Route path="perfil"> 
                <Route index element={<LoginUser/>}/>
                <Route path=":seguimiento" element={<LoginUser/>}/>
              </Route>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


