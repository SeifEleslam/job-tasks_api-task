import { Checkbox, Switch } from "antd";
import { ProfileItemInfoType } from "../types/itemInfo";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import { ProfileInfoType } from "../types/profileInfo";

export const ProfileItemInfo = ({
  label,
  keyLabel,
  data,
  updateData,
}: {
  label: string;
  keyLabel: keyof ProfileInfoType;
  data: ProfileItemInfoType;
  updateData: (key: keyof ProfileInfoType, data: ProfileItemInfoType) => void;
}) => {
  const [show, setShow] = useState<boolean>(data.show);
  const [internalUse, setInternalUse] = useState<boolean>(data.mandatory);

  const onInternalChange = (e: CheckboxChangeEvent) => {
    if (internalUse === e.target?.checked) return;
    setInternalUse(e.target?.checked);
    updateData(keyLabel, { ...data, mandatory: e.target?.checked });
  };
  const onShowChange = (checked: boolean) => {
    if (show === checked) return;
    setShow(checked);
    updateData(keyLabel, { ...data, show: checked });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <p style={{ fontWeight: "bold", flexGrow: 1 }}>{label}</p>
      <Checkbox onChange={onInternalChange} checked={internalUse}>
        Mandatory
      </Checkbox>
      <Switch
        checkedChildren="Show"
        unCheckedChildren="Hide"
        checked={show}
        onClick={onShowChange}
      />
    </div>
  );
};
