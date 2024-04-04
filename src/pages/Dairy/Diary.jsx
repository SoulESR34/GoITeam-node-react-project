import { Calendar } from "../../components/Calendar/Calendar";
import { AddProductForm } from "../../components/forms/AddProductForm/AddProductForm"; 

export const Diary = () => { 
    return (
        <>
            <Calendar date={new Date()} />
            <AddProductForm />
        </>
    );
}
