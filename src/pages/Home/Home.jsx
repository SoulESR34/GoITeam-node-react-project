

import { Calculator } from "../../components/forms/Calculator/Calculator";
import { HomeBackground } from "../common/HomeBackground.styled";



export const Home = () => {
  return (
    <HomeBackground>
      <div className="container">
        <main>
          <Calculator />
      
        </main>
      </div>
    </HomeBackground>
  );
};
