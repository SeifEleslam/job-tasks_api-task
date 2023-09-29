import { useState } from "react";

export const MainHeader = () => {
  //JS
  const [selected, setSelected] = useState("Application Form");

  //Styles
  const headerStyle: React.CSSProperties = {
    padding: 0,
    width: "100%",
    overflowX: "scroll",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: 75,
    marginBottom: 75,
    background: "white",
  };
  const menuStyle: React.CSSProperties = {
    minWidth: 500,
    display: "flex",
    textAlign: "center",
  };
  const itemStyle: React.CSSProperties = {
    padding: 40,
    cursor: "pointer",
    width: "25%",
  };
  const activeItemStyle: React.CSSProperties = {
    backgroundColor: "#1677ff",
    color: "white",
  };

  return (
    <div style={headerStyle}>
      <div id="menu" style={menuStyle}>
        {["Program Details", "Application Form", "Workflow", "Preview"].map(
          (itm) => {
            return itm === selected ? (
              <div
                key={itm}
                style={{ ...itemStyle, ...activeItemStyle }}
                onClick={() => setSelected(itm)}
              >
                {itm}
              </div>
            ) : (
              <div key={itm} style={itemStyle} onClick={() => setSelected(itm)}>
                {itm}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
