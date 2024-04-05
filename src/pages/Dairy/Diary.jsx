import { Calendar } from "../../components/Calendar/Calendar";
import { DiaryProductsList } from "../../components/Diary/DiaryProductsList/DiaryProductsList";
import { Side } from "../../components/side/Side";
import { PageContainer } from "../common/UserPagesDisposition";

export const Diary = () => {
  return (
    <div className="container">
      <PageContainer>
        <div>
          <Calendar date={new Date()} />
          <DiaryProductsList />
        </div>
        <Side />
      </PageContainer>
    </div>
  );
};
