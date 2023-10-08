import { useEffect, useRef, useState } from "react";
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
import { QUESTIONTYPES } from "../types/enum";
import { InputContainer } from "./InputContainer";
import { CloseOutlined } from "@ant-design/icons";
import { DragableList } from "./DragableList";

export const QuestionForm = ({
  index,
  data,
  onSubmit,
  onCancel,
}: {
  index?: number;
  data?: QuestionInfoType;
  onSubmit: (data: QuestionInfoType, index?: number) => void;
  onCancel: (index?: number) => void;
}) => {
  const formRef = useRef<FormInstance>(null);
  const [type, setType] = useState<QuestionTypeType | undefined>(
    data?.type ?? "Paragraph"
  );

  useEffect(() => {
    formRef.current?.resetFields();
    setType(data?.type);
  }, [data]);

  const onFinish = (values: QuestionFormType) => {
    const tmp: QuestionInfoType = {
      ...values,
      id: data?.id ?? undefined,
      choices: values.choices?.map((choice) => choice.name) ?? undefined,
      maxChoice: values?.maxChoice ? Math.floor(values.maxChoice) : undefined,
      type: data?.type ?? values.type,
    };
    onSubmit(tmp, index);
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
    setType(data?.type ?? "Paragraph");
    onCancel(index);
  };
  return (
    <Form
      ref={formRef}
      layout="vertical"
      name={"basic" + index + (data ? "e1" : "e0") + Math.random() + new Date()}
      initialValues={
        data
          ? {
              ...data,
              choices:
                data?.choices?.map((choice) => ({ name: choice })) ?? undefined,
            }
          : { type: "Paragraph", question: "" }
      }
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
            {
              required: true,
              message: "Max choices allowed is required [min = 1]",
            },
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
  );
};
