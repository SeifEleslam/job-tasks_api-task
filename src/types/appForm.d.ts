import { PersonalInfoType } from "./personalInfo";

export interface AppForm {
  id: string;
  type: "applicationForm";
  attributes: Attributes;
}
export interface Attributes {
  coverImage: string;
  personalInformation: PersonalInfoType;
}
