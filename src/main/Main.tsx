import { useEffect, useState } from "react";
import { ImgUpload } from "./ImgUpload";
import { MainHeader } from "./MainHeader";
import { PersonalInfo } from "./PersonalInfo";
import { AppForm, Attributes } from "../types/appForm";
import { Profile } from "./Profile";
import { CustomizedQuestions } from "./CustomizedQuestions";
import { getAppFormData } from "../api/appFormAPI";
import { AppCard } from "../components/AppCard";

export default function AppMain() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AppForm>();
  const updateData = (key: keyof Attributes, comingData: any) => {
    const tmp = { ...(data as AppForm) };
    tmp.attributes[key] = comingData;
    setData(tmp);
  };
  useEffect(() => {
    getAppFormData("sad", 12)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);
  useEffect(() => {
    // console.log((data as AppForm).attributes.profile);
  }, [data]);
  return (
    <div style={{ paddingBottom: 75 }}>
      <MainHeader />
      {data && !loading ? (
        <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
          <ImgUpload
            data={data.attributes.coverImage}
            updateData={updateData}
          />
          <br />
          <PersonalInfo
            updateData={updateData}
            data={data.attributes.personalInformation}
          />
          <br />
          <Profile updateData={updateData} data={data.attributes.profile} />
          <br />
          <CustomizedQuestions
            updateData={updateData}
            data={data?.attributes.customisedQuestions}
          />
        </div>
      ) : (
        <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
          <AppCard
            loading={loading}
            CompStyle={{ height: 300, boxShadow: "none" }}
          />
          <AppCard
            loading={loading}
            CompStyle={{ height: 500, boxShadow: "none" }}
          />
          <AppCard
            loading={loading}
            CompStyle={{ height: 400, boxShadow: "none" }}
          />
          <AppCard
            loading={loading}
            CompStyle={{ height: 300, boxShadow: "none" }}
          />
        </div>
      )}
    </div>
  );
}
