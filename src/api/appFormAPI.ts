import { AppForm } from "../types/appForm";

export const getAppFormData = (programID: string, version: number) => {
  return fetch(`https://stoplight.io/mocks/seifeleslam/task1-1/248480908
/api/${version}/programs/${programID}/application-form`);
};

export const putAppFormData = (
  programID: string,
  version: number,
  body: any
) => {
  return fetch(
    `https://stoplight.io/mocks/seifeleslam/task1-1/248480908
/api/${version}/programs/${programID}/application-form`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: body,
    }
  );
};
