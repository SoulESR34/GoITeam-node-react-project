import { Calendar } from "../../components/Calendar/Calendar";

export const Diary = () => { 
    return (
      <div className="container">
        <main>
          <Calendar date={new Date()} />
          
        </main>
      </div>
    );
}
