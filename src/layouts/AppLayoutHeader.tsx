import { Avatar, Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { LAYOUTITEMS } from "./AppLayoutSider";
import { VideoCameraOutlined } from "@ant-design/icons";

export const AppLayoutHeader = () => {
  return (
    <Header className="md:hidden flex items-center bg-[#fff] justify-between shadow-lg">
      <div className="flex items-center ">
        <Avatar
          className="mr-2"
          style={{
            cursor: "pointer",
            verticalAlign: "middle",
            background: "#e6f4ff",
            color: "#1677ff",
          }}
          size="large"
        >
          {"AS"}
        </Avatar>
        <div className="xl:block hidden w-24">Assra Sasd</div>
      </div>
      <Menu
        className="w-full justify-center"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={LAYOUTITEMS}
      />
      <Button
        type="text"
        icon={<VideoCameraOutlined className="px-2 py-1" />}
      ></Button>
    </Header>
  );
};
