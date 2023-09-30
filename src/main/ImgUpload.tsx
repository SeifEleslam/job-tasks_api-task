import React, { useState } from "react";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { AppCard } from "../components/AppCard";
import { Button, message } from "antd";
import { Attributes } from "../types/appForm";

export const ImgUpload = ({
  data,
  updateData,
}: {
  data?: string;
  updateData: (key: keyof Attributes, data: string) => void;
}) => {
  const [imgURL, setImgURL] = useState<string>(data ?? "");

  const afterUpload = (event: any) => {
    const file: File = event.target.files[0];
    if (!file) {
      message.error("Error occured");
      return;
    }
    if (!file.type.includes("image")) {
      message.error("Only Image types allowed");
      return;
    }
    if (file.size > 1048576) {
      message.error("Max size 1 MB");
      return;
    }
    if (file) {
      // here should upload the file and get the actual url
      const reader = new FileReader();
      reader.onload = () => {
        setImgURL(reader.result as string);
        updateData("coverImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const resetImg = () => setImgURL("");

  return (
    <AppCard title="Upload cover image">
      {!imgURL ? (
        <label>
          <div
            style={{
              border: "1px dashed #aaa",
              borderRadius: 20,
              padding: 20,
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(event) => afterUpload(event)}
              style={{ display: "none" }}
            />
            <UploadOutlined style={{ fontSize: "50px" }} />
            <br />
            <p style={{ fontWeight: "bold" }}>Upload cover image</p>
            <p style={{ color: "#aaa" }}>
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
        </label>
      ) : (
        <div>
          <img
            alt="example"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "1px solid #eee",
              borderRadius: 20,
            }}
            src={imgURL}
          />
          <Button
            style={{ width: "100%", marginTop: 4, marginBottom: 4 }}
            icon={<DeleteOutlined />}
            danger={true}
            onClick={() => resetImg()}
          >
            Delete
          </Button>
        </div>
      )}
    </AppCard>
  );
};
