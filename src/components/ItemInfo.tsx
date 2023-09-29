import { Checkbox, Switch } from "antd";
import { ItemInfoType } from "../types/itemInfo";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import { PersonalInfoType } from "../types/personalInfo";

export const ItemInfo = ({
  label,
  keyLabel,
  data,
  updateData,
}: {
  label: string;
  keyLabel: keyof PersonalInfoType;
  data: ItemInfoType;
  updateData: (key: keyof PersonalInfoType, data: ItemInfoType) => void;
}) => {
  const [show, setShow] = useState<boolean>(data.show);
  const [internalUse, setInternalUse] = useState<boolean>(data.internalUse);

  const onInternalChange = (e: CheckboxChangeEvent) => {
    if (internalUse === e.target?.checked) return;
    setInternalUse(e.target?.checked);
    updateData(keyLabel, { ...data, internalUse: e.target?.checked });
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
        Internal
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
