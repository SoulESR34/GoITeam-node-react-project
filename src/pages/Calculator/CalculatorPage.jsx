import { Calculator } from "../../components/forms/Calculator/Calculator";
import { Side } from "../../components/side/Side";

export const CalculatorPage = () => {   
    return (
    
      <div className="container">
        <main>
            <Calculator />
            <Side />
        </main>
      </div>
    
    );
}
