/* eslint-disable array-callback-return */
import { AppCard } from "../components/AppCard";
import { EditCollapse } from "../components/EditCollapse";
import { NewCollapse } from "../components/NewCollapse";
import { Attributes } from "../types/appForm";
import { QuestionInfoType } from "../types/questionInfo";
import { LABELS } from "../types/enum";
import { ProfileInfoType } from "../types/profileInfo";
import { ProfileItemInfo } from "../components/ProfileItemInfo";

export const Profile = ({
  data,
  updateData,
}: {
  data: ProfileInfoType;
  updateData: (key: keyof Attributes, data: ProfileInfoType) => void;
}) => {
  const updateItemData = (key: keyof ProfileInfoType, comingData: any) => {
    const tmp = { ...data };
    tmp[key] = comingData;
    updateData("profile", tmp);
  };
  const addQuestioData = (comingData: QuestionInfoType) => {
    const tmp = { ...data };
    tmp.profileQuestions.push(comingData);
    updateData("profile", tmp);
  };
  const editQuestioData = (comingData: QuestionInfoType, index: number) => {
    const tmp = { ...data };
    tmp.profileQuestions[index] = comingData;
    updateData("profile", tmp);
  };
  const delItem = (index: number) => {
    const tmp = { ...data };
    tmp.profileQuestions = tmp.profileQuestions.filter((_, i) => i !== index);
    updateData("profile", tmp);
  };
  return (
    <AppCard title="Profile">
      {Object.entries(data).map(([key, val]) => {
        if (key !== "profileQuestions")
          return (
            <ProfileItemInfo
              key={key}
              keyLabel={key as keyof ProfileInfoType}
              label={LABELS[key]}
              data={val}
              updateData={updateItemData}
            />
          );
      })}
      <EditCollapse
        items={data.profileQuestions}
        onSubmit={editQuestioData}
        delItem={delItem}
      />
      <NewCollapse onSubmit={addQuestioData} />
    </AppCard>
  );
};
