import { Routes, Route } from "react-router-dom";
import { HomeHeader } from "./pages/sections/Headers/HomeHeader/HomeHeader.jsx";
import { useSelector } from "react-redux";
import { UserHeader } from "./pages/sections/Headers/UserHeader/UserHeader.jsx";
import { Singup } from "./pages/Auth/Signup/Signup.jsx";
import { Login } from "./pages/Auth/Login/Login.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner/Spinner.jsx";

import { Diary } from "./pages/Dairy/Diary.jsx";
import { CalculatorPage } from "./pages/Calculator/CalculatorPage.jsx";

function App() {
  let { isLoggin } = useSelector((state) => state.auth);
  isLoggin = true;
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={!isLoggin ? <HomeHeader /> : <UserHeader />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          {isLoggin && (
            <>
              <Route path="/calculator" />
              <Route path="/dairy" />
            </>
          )}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
