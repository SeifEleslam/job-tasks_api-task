import { AppCard } from "../components/AppCard";
import { ItemInfo } from "../components/ItemInfo";
import { QuestionForm } from "../components/QuestionForm";
import { Attributes } from "../types/appForm";
import { PersonalInfoType } from "../types/personalInfo";
import { QuestionInfoType } from "../types/questionInfo";
import { LABELS } from "./enum";

export const PersonalInfo = ({
  loading,
  data,
  updateData,
}: {
  loading: boolean;
  data: PersonalInfoType;
  updateData: (key: keyof Attributes, data: PersonalInfoType) => void;
}) => {
  const updateItemData = (key: keyof PersonalInfoType, comingData: any) => {
    const tmp = { ...data };
    tmp[key] = comingData;
    updateData("personalInformation", tmp);
  };
  const addQuestioData = (comingData: QuestionInfoType) => {
    const tmp = { ...data };
    tmp.personalQuestions.push(comingData);
    updateData("personalInformation", tmp);
  };
  return (
    <AppCard loading={loading} title="Personal Information">
      {Object.entries(data).map(([key, val]) => {
        if (key !== "personalQuestions")
          return (
            <ItemInfo
              key={key}
              keyLabel={key as keyof PersonalInfoType}
              label={LABELS[key]}
              data={val}
              updateData={updateItemData}
            />
          );
      })}
      {data.personalQuestions.map((val, i) => {
        return <div key={`queskey${i}`}>{val.question}</div>;
      })}
      <QuestionForm onSubmit={addQuestioData} />
    </AppCard>
  );
};
