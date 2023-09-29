import { useEffect, useState } from "react";
import { ImgUpload } from "./ImgUpload";
import { MainHeader } from "./MainHeader";
import { PersonalInfo } from "./PersonalInfo";
import { AppForm, Attributes } from "../types/appForm";

export default function AppMain() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AppForm>(dataTest);
  const updateData = (key: keyof Attributes, comingData: any) => {
    const tmp = { ...data };
    tmp.attributes[key] = comingData;
    setData(tmp);
  };
  useEffect(() => {
    console.log(data.attributes.personalInformation);
  }, [data]);
  return (
    <div style={{ paddingBottom: 75 }}>
      <MainHeader />
      <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
        <ImgUpload loading={loading} />
        <br />
        <PersonalInfo
          updateData={updateData}
          loading={loading}
          data={data.attributes.personalInformation}
        />
      </div>
    </div>
  );
}

const dataTest: AppForm = {
  id: "id",
  type: "applicationForm",
  attributes: {
    coverImage: "example.com",
    personalInformation: {
      firstName: {
        internalUse: false,
        show: true,
      },
      lastName: {
        internalUse: false,
        show: true,
      },
      emailId: {
        internalUse: false,
        show: true,
      },
      phoneNumber: {
        internalUse: false,
        show: true,
      },
      nationality: {
        internalUse: false,
        show: true,
      },
      currentResidence: {
        internalUse: false,
        show: true,
      },
      idNumber: {
        internalUse: false,
        show: true,
      },
      dateOfBirth: {
        internalUse: false,
        show: true,
      },
      gender: {
        internalUse: false,
        show: true,
      },
      personalQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
  },
};
