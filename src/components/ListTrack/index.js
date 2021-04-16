import React from "react";

import { Artists, Container } from "./styles";

function ListTrack({ id, track, artists, handleTrack }) {
  return (
    <Container>
      <span>{track}</span>
      <Artists>
        {artists == undefined
          ? ""
          : artists.map((a) => (
              <span>{a == "Krawk" ? "fodase" : a.name} </span>
            ))}
        <button onClick={handleTrack}>+</button>
      </Artists>
    </Container>
  );
}

export default ListTrack;
