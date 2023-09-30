/* eslint-disable array-callback-return */
import { AppCard } from "../components/AppCard";
import { EditCollapse } from "../components/EditCollapse";
import { NewCollapse } from "../components/NewCollapse";
import { Attributes } from "../types/appForm";
import { QuestionInfoType } from "../types/questionInfo";

export const CustomizedQuestions = ({
  data,
  updateData,
}: {
  data: QuestionInfoType[];
  updateData: (key: keyof Attributes, data: QuestionInfoType[]) => void;
}) => {
  const addQuestioData = (comingData: QuestionInfoType) => {
    const tmp = [...data];
    tmp.push(comingData);
    updateData("customisedQuestions", tmp);
  };
  const editQuestioData = (comingData: QuestionInfoType, index: number) => {
    const tmp = [...data];

    tmp[index] = comingData;
    updateData("customisedQuestions", tmp);
  };
  const delItem = (index: number) => {
    const tmp = data.filter((_, i) => i !== index);
    updateData("customisedQuestions", tmp);
  };
  return (
    <AppCard title="Additional Questions">
      <EditCollapse items={data} onSubmit={editQuestioData} delItem={delItem} />
      <NewCollapse onSubmit={addQuestioData} />
    </AppCard>
  );
};
