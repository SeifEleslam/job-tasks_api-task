import { ItemInfoType } from "./itemInfo";
import { QuestionInfoType } from "./questionInfo";

export class PersonalInfoType {
  firstName: ItemInfoType;
  lastName: ItemInfoType;
  emailId: ItemInfoType;
  phoneNumber: ItemInfoType;
  nationality: ItemInfoType;
  currentResidence: ItemInfoType;
  idNumber: ItemInfoType;
  dateOfBirth: ItemInfoType;
  gender: ItemInfoType;
  personalQuestions: QuestionInfoType[];
}
