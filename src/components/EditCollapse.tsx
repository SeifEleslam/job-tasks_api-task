import "../App.css";
import { Button, Collapse } from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { QuestionInfoType } from "../types/questionInfo";
import { QuestionForm } from "./QuestionForm";
import { LABELS } from "../types/enum";

export const EditCollapse = ({
  delItem,
  onSubmit,
  items,
}: {
  delItem: (index: number) => void;
  onSubmit: (data: QuestionInfoType, index: number) => void;
  items: QuestionInfoType[];
}) => {
  const [activeKey, setActiveKey] = useState<string | undefined>(undefined);
  return (
    <Collapse
      activeKey={activeKey}
      style={{ background: "white" }}
      bordered={false}
      collapsible={"icon"}
      expandIconPosition="end"
      expandIcon={(active) => (
        <Button type="text">
          <EditOutlined style={{ color: "#aaa", fontSize: 20 }} />
        </Button>
      )}
      accordion={true}
      onChange={(key) => setActiveKey(key as string)}
      items={items.map((item, i) => ({
        headerClass: "p-0",
        key: i + "key",
        label: (
          <div>
            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 0.5 }}>
              {LABELS[item.type]}
            </p>
            <p style={{ fontSize: 16, fontWeight: "bold", lineHeight: 0.5 }}>
              {item.question}
            </p>
          </div>
        ),
        children: (
          <QuestionForm
            index={i}
            data={item}
            onCancel={(index) => {
              setActiveKey(undefined);
              delItem(index as number);
            }}
            onSubmit={(data, index) => {
              onSubmit(data, index as number);
              setActiveKey(undefined);
            }}
          />
        ),
      }))}
    />
  );
};
