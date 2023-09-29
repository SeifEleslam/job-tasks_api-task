export class QuestionInfoType {
  id?: string;
  type: QuestionTypeType;
  question: string;
  choices?: string[];
  maxChoice?: number;
  disqualify?: boolean;
  other?: boolean;
}

export class QuestionFormType {
  id?: string;
  type: QuestionTypeType;
  question: string;
  choices?: { name: string }[];
  maxChoice?: number;
  disqualify?: boolean;
  other?: boolean;
}
export type QuestionTypeType =
  | "Paragraph"
  | "ShortAnswer"
  | "YesNo"
  | "Dropdown"
  | "MultipleChoice"
  | "Date"
  | "Number"
  | "FileUpload";
