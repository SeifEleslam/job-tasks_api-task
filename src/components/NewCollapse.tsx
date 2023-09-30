import { Button } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { QuestionInfoType } from "../types/questionInfo";
import { QuestionForm } from "./QuestionForm";

export const NewCollapse = ({
  onSubmit,
}: {
  onSubmit: (data: QuestionInfoType) => void;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      style={{
        borderTop: "1px solid #eee",
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      {!collapsed ? (
        <Button
          type="text"
          onClick={() => setCollapsed((prv) => !prv)}
          icon={<PlusOutlined />}
        >
          Add a question
        </Button>
      ) : (
        <QuestionForm
          onCancel={() => setCollapsed((prv) => !prv)}
          onSubmit={(data) => {
            onSubmit(data);
            setCollapsed((prv) => !prv);
          }}
        />
      )}
    </div>
  );
};
