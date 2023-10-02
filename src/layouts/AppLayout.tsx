import React, { ReactNode } from "react";

import { Layout } from "antd";
import { AppLayoutSider } from "./AppLayoutSider";
import { AppLayoutHeader } from "./AppLayoutHeader";

const { Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <AppLayoutSider />
      <Layout>
        <AppLayoutHeader />
        <Content
          style={{
            background: "#f9faff",
            overflowY: "scroll",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
