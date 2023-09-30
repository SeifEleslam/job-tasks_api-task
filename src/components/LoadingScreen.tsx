import { AppCard } from "./AppCard";

export const LoadingScreen = () => {
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
      <AppCard loading={true} CompStyle={{ height: 300, boxShadow: "none" }} />
      <AppCard loading={true} CompStyle={{ height: 500, boxShadow: "none" }} />
      <AppCard loading={true} CompStyle={{ height: 400, boxShadow: "none" }} />
      <AppCard loading={true} CompStyle={{ height: 300, boxShadow: "none" }} />
    </div>
  );
};
