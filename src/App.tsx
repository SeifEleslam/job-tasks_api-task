import React from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import AppMain from "./main/Main";

// const AppMain = React.lazy(() => import("./main/Main"));
function App() {
  return (
    <AppLayout>
      <AppMain />
    </AppLayout>
  );
}

export default App;
