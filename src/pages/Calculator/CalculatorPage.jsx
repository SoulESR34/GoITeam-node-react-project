import { Calculator } from "../../components/forms/Calculator/Calculator";
import { Side } from "../../components/side/Side";
import { PageContainer } from "../common/UserPagesDisposition";

export const CalculatorPage = () => {   
    return (
    
      <div className="container">
        <PageContainer>
            <Calculator />
            <Side />
        </PageContainer>
      </div>
    
    );
}
