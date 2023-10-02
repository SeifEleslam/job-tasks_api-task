import { useEffect, useState } from "react";
import { ImgUpload } from "./ImgUpload";
import { MainHeader } from "./MainHeader";
import { PersonalInfo } from "./PersonalInfo";
import { AppForm, Attributes } from "../types/appForm";
import { Profile } from "./Profile";
import { CustomizedQuestions } from "./CustomizedQuestions";
import { getAppFormData, putAppFormData } from "../api/appFormAPI";
import { Button, message } from "antd";
import { LoadingScreen } from "../components/LoadingScreen";

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
    console.log(data?.attributes);
  }, [data]);
  const submit = () => {
    setLoading(true);
    putAppFormData("sad", 12, data as AppForm).then((res) => {
      res.status === 204
        ? message.success("request sent successfully")
        : message.error("something went wrong");
      setLoading(false);
    });
  };
  return (
    <div style={{ paddingBottom: 75 }}>
      <MainHeader />
      {data ? (
        <div className="max-w-full md:mx-16 mx-6 ">
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
          <Button
            loading={loading}
            type="primary"
            style={{ maxWidth: "40rem", marginTop: 30, width: "100%" }}
            onClick={submit}
          >
            Submit
          </Button>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
