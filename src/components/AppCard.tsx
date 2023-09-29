import { Card } from "antd";
import { CSSProperties, ReactNode } from "react";

export const AppCard = ({
  loading,
  CompStyle,
  children,
  title,
}: {
  loading: boolean;
  CompStyle?: CSSProperties;
  children: ReactNode;
  title?: string;
}) => {
  return (
    <Card
      style={{
        width: 550,
        maxWidth: "100%",
        marginTop: 16,
        boxShadow:
          "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
        ...CompStyle,
      }}
      loading={loading}
      headStyle={{ background: "#e6f4ff" }}
      title={title}
    >
      {children}
    </Card>
  );
};
