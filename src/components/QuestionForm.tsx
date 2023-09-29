import { useRef, useState } from "react";
import {
  QuestionFormType,
  QuestionInfoType,
  QuestionTypeType,
} from "../types/questionInfo";
import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  FormListFieldData,
  Input,
  InputNumber,
  Select,
} from "antd";
import { QUESTIONTYPES } from "../main/enum";
import { InputContainer } from "./InputContainer";
import { CloseOutlined } from "@ant-design/icons";
import { DragableList } from "./DragableList";

export const QuestionForm = ({
  data,
  onSubmit,
}: {
  data?: QuestionInfoType;
  onSubmit: (data: QuestionInfoType) => void;
}) => {
  const formRef = useRef<FormInstance>(null);
  const [type, setType] = useState<QuestionTypeType | null>(
    data?.type ?? "Paragraph"
  );
  // const [questionData, setQuestionData] = useState<QuestionInfoType>(
  //   data ?? { type: "Paragraph", question: "" }
  // );

  const onFinish = (values: QuestionFormType) => {
    const tmp: QuestionInfoType = {
      ...values,
      id: data?.id ?? undefined,
      choices: values.choices?.map((choice) => choice.name) ?? undefined,
      maxChoice: Math.floor(values?.maxChoice ?? 0) ?? undefined,
    };
    onSubmit(tmp);
    resetForm();
  };
  const onTypeSelect = (type: QuestionTypeType) => {
    setType(type);
    const tmp: string = formRef.current?.getFieldsValue()?.question ?? "";
    formRef.current?.setFieldsValue({
      type: type,
      question: tmp,
      choices: [""],
      maxChoice: 1,
      disqualify: false,
      other: false,
    });
  };
  const resetForm = () => {
    formRef.current?.resetFields();
    setType("Paragraph");
  };
  return (
    <div
      style={{ borderTop: "1px solid #eee", paddingBottom: 10, paddingTop: 10 }}
    >
      <Form
        ref={formRef}
        layout="vertical"
        name="basic"
        initialValues={data ?? { type: "Paragraph", question: "" }}
        onFinish={onFinish}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        {!data && (
          <InputContainer
            type="type"
            label="Type"
            rules={[{ required: true, message: "Type should be selected" }]}
          >
            <Select
              placeholder="Question Type"
              options={QUESTIONTYPES}
              optionLabelProp="label"
              onSelect={onTypeSelect}
            />
          </InputContainer>
        )}
        <InputContainer
          type="question"
          label="Question"
          rules={[{ required: true, message: "Question is required" }]}
        >
          <Input placeholder="Question Label" />
        </InputContainer>
        {(type === "Dropdown" || type === "MultipleChoice") && (
          <Form.List initialValue={[{ name: "" }]} name="choices">
            {(choices: FormListFieldData[], { add, remove, move }) => (
              <div>
                <div style={{ marginBottom: 6, marginLeft: 84 }}>
                  <label>Choices</label>
                </div>
                <DragableList
                  items={choices}
                  actions={{ add, remove, move }}
                ></DragableList>
              </div>
            )}
          </Form.List>
        )}
        {(type === "Dropdown" || type === "MultipleChoice") && (
          <InputContainer
            label="Max Choice Allowed"
            type="maxChoice"
            rules={[
              { required: true, message: "must provide a max allowed min = 1" },
            ]}
          >
            <InputNumber min={1} />
          </InputContainer>
        )}
        {(type === "Dropdown" || type === "MultipleChoice") && (
          <InputContainer type="other" valuePropName="checked">
            <Checkbox>Enable Other Option</Checkbox>
          </InputContainer>
        )}
        {type === "YesNo" && (
          <InputContainer type="disqualify" valuePropName="checked">
            <Checkbox>Enable Other Option</Checkbox>
          </InputContainer>
        )}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            danger
            type="text"
            icon={<CloseOutlined />}
            onClick={() => resetForm()}
          >
            Delete Question
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => console.log(formRef.current)}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};
