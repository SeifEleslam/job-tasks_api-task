import { Card } from "antd";
import { CSSProperties, ReactNode } from "react";

export const AppCard = ({
  loading = false,
  CompStyle,
  children,
  title,
}: {
  loading?: boolean;
  CompStyle?: CSSProperties;
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <Card
      style={{
        width: "40rem",
        maxWidth: "100%",
        marginTop: 16,
        boxShadow:
          "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
        ...CompStyle,
      }}
      loading={loading}
      headStyle={{ background: "#e9efff" }}
      title={<p className="text-xl text-[#4996ff]">{title}</p>}
    >
      {children}
    </Card>
  );
};
