import { Form } from "antd";
import { ReactNode } from "react";
import { QuestionInfoType } from "../types/questionInfo";
import { Rule } from "antd/es/form";

export const InputContainer = ({
  children,
  type,
  label,
  rules,
  valuePropName,
}: {
  children: ReactNode;
  type: keyof QuestionInfoType;
  label?: string;
  rules?: Rule[];
  valuePropName?: string;
}) => {
  return (
    <Form.Item<QuestionInfoType>
      valuePropName={valuePropName}
      label={label}
      name={type}
      rules={rules}
    >
      {children}
    </Form.Item>
    // <div style={{ marginTop: 20 }}>
    //   {/* <label>{label}</label> */}

    // </div>
  );
};
