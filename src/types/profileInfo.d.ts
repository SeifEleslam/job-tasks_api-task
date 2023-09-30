import { ProfileItemInfoType } from "./itemInfo";
import { QuestionInfoType } from "./questionInfo";

export interface ProfileInfoType {
  education: ProfileItemInfoType;
  experience: ProfileItemInfoType;
  resume: ProfileItemInfoType;
  profileQuestions: QuestionInfoType[];
}
