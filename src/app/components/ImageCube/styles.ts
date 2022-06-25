import styled from "styled-components";

export const ImageCubeContainer = styled.div`
  flex: 1.5 1 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50%;
  min-width: 50%;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
