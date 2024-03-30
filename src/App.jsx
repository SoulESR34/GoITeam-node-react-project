import { Routes, Route, } from "react-router";
import { Suspense } from "react";
import { Home } from "./pages/Home/Home";
import { Header } from "./pages/sections/Header/Header";
import { Login } from "./pages/Auth/Login/Login";
import { Singup } from "./pages/Auth/Singup/Singup";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<Singup/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
