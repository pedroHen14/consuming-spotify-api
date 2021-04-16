import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: var(--primary);
`;

export const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  position: fixed;
  gap: 10px;
  padding: 10px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
  }
`;

export const Body = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 100px;
  justify-content: center;
`;

export const ContainerListTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  gap: 1px;
  padding: 5px;
`;

export const ImageModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 10px;
  }
`;
