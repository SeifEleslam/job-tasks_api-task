import React from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import AppMain from "./main/Main";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#4996ff",
          controlItemBgActive: "#e9efff",
          controlItemBgHover: "#eee",
          colorBorderBg: "#4996ff",
          colorPrimaryText: "#fff",
          // Alias Token
          colorBgContainer: "#fff",
        },
      }}
    >
      <AppLayout>
        <AppMain />
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;
