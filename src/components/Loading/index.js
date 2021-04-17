import { Container } from "./styles";

import spinner from "../../assets/icon_spotify.png";

function Loading() {
  return (
    <Container>
      <img src={spinner}></img>
      Carregando...
    </Container>
  );
}

export default Loading;
