import React from "react";
import { FileUploader } from "../../components/FileUploader";
import { ImageCube } from "../../components/ImageCube";
import { MainPageContainer } from "./styles";

export const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <FileUploader />
      <ImageCube />
    </MainPageContainer>
  );
};
