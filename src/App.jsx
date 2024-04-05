import { Routes, Route } from "react-router-dom";
import { Singup } from "./pages/Auth/Signup/Signup.jsx";
import { Login } from "./pages/Auth/Login/Login.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Suspense, useEffect } from "react";
import { Spinner } from "./components/Spinner/Spinner.jsx";
import { useSelector } from "react-redux";
import { Diary } from "./pages/Dairy/Diary.jsx";
import { CalculatorPage } from "./pages/Calculator/CalculatorPage.jsx";
import { Background } from "./components/Backgrounds/Background.jsx";
import { Header } from "./pages/sections/Headers/Header/Header.jsx";

function App() {
  const {isLogged} = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  return (
    <Background isLogged={isLogged}> 
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Header isLogged={isLogged}/>}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
            {isLogged && (
              <>
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/dairy" element={<Diary />} />
              </>
            )}
          </Route>
        </Routes>
      </Suspense>
    </Background>
  );
}

export default App;
