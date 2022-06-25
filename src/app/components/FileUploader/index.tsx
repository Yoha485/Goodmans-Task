import React from "react";
import { FileUploaderContainer, FileList, Uploader, FileName, UploaderWrapper, UploaderText } from "./styles";
import useStore from "../../store";
import { AppState, File } from "../../../types";

export const FileUploader: React.FC = () => {
  const uploadedFiles = useStore((state: AppState) => state.uploadedFiles);
  const addToUploadedFiles = useStore((state: AppState) => state.addToUploadedFiles);
  const setSelectedFile = useStore((state: AppState) => state.setSelectedFile);

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const newFile = {
      name: event.target.files[0].name,
      url: URL.createObjectURL(event.target.files[0]),
    };
    addToUploadedFiles(newFile);
  };

  return (
    <FileUploaderContainer>
      <UploaderWrapper>
        <UploaderText>+ Upload New Image</UploaderText>
        <Uploader type="file" accept="image/png, image/jpg, image/gif, image/jpeg" onChange={handleUploadFile} />
      </UploaderWrapper>

      {uploadedFiles.map((file: File, index: number) => (
        <FileList key={index} onClick={() => setSelectedFile(file)}>
          <FileName>{file.name}</FileName>
        </FileList>
      ))}
    </FileUploaderContainer>
  );
};
