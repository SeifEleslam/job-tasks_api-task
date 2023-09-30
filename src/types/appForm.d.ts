import { PersonalInfoType } from "./personalInfo";
import { ProfileInfoType } from "./profileInfo";
import { QuestionInfoType } from "./questionInfo";

export interface AppForm {
  id: string;
  type: "applicationForm";
  attributes: Attributes;
}
export interface Attributes {
  coverImage: string;
  personalInformation: PersonalInfoType;
  profile: ProfileInfoType;
  customisedQuestions: QuestionInfoType[];
}
