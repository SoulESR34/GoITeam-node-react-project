import { Calendar } from "../../components/Calendar/Calendar";
import { DiaryProductsList } from "../../components/Diary/DiaryProductsList/DiaryProductsList";
import { Side } from "../../components/side/Side";

export const Diary = () => {
  return (
    <main>
      <Calendar date={new Date()} />
      <DiaryProductsList />
      <Side />
    </main>
  );
};
