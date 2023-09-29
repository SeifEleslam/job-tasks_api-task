import React, { useState } from "react";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { AppCard } from "../components/AppCard";
import { Button } from "antd";

export const ImgUpload = ({ loading }: { loading: boolean }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imgURL, setImgURL] = useState<string>("");
  const afterUpload = (event: any) => {
    const file: File = event.target.files[0];
    if (!file || !file.type.includes("image")) {
      return;
    }

    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImgURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const resetImg = () => {
    setImgURL("");
    setUploadedFile(null);
  };
  return (
    <AppCard title="Upload cover image" loading={false}>
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
