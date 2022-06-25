import styled from "styled-components";

export const FileList = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid black;
`;

export const FileName = styled.p`
  padding-left: 20px;

  font-size: 14px;
  font-weight: 500;
`;

export const UploaderText = styled.p`
  padding-left: 20px;

  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
`;

export const UploaderWrapper = styled.label`
  background-color: rgba(0, 75, 252, 255);
`;

export const Uploader = styled.input`
  display: none;
`;

export const FileUploaderContainer = styled.div`
  flex: 1 1 0;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  filter: drop-shadow(10px 10px 10px black);

  ${FileList}, ${UploaderWrapper} {
    width: 300px;
    height: 50px;
  }

  *:first-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  *:last-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  * {
    cursor: pointer;
  }
`;
