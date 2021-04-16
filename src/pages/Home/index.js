import React, { useState } from "react";
import api from "../../services/api";
import InputSearch from "../../components/InputSearch";

import {
  Body,
  Container,
  ContainerListTrack,
  Header,
  ImageModal,
  Logo,
} from "./styles";
import ListTrack from "../../components/ListTrack";
import imageLogo from "../../assets/logoSpotify.png";
import Modal from "../../components/Modal";

function Home() {
  const [trackList, setTrackList] = useState([]);

  const [trackInModal, setTrackInModal] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) handleReload();

    if (e.target.value.length < 3) return;

    try {
      const response = await api.get("/search", {
        params: { q: e.target.value, type: "track" },
      });

      setTrackList(response.data.tracks.items);
      console.log(response.data.tracks.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReload = () => {
    setTrackList([]);
    setSearch("");
  };

  const handleModalTrack = async (id) => {
    setOpenModal(true);

    try {
      const response = await api.get(`/tracks/${id}`);

      setTrackInModal(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openModal && (
        <Modal
          title={trackInModal.name}
          handleClose={() => setOpenModal(false)}
        >
          <ImageModal>
            <img src={trackInModal.album.images[0].url} alt="" />
          </ImageModal>
        </Modal>
      )}
      <Container>
        <Header>
          <Logo>
            <img src={imageLogo} alt="Logo Spotify" />
          </Logo>
          <h1>Consumo API Spotify</h1>
          <InputSearch value={search} handler={handleSearch} />
        </Header>

        <Body>
          {trackList == "" ? (
            <div>
              <h1>
                Bem-vindo ao consumo da API do Spotify, pesquise uma música,
                álbum ou artista!
              </h1>
            </div>
          ) : (
            <>
              <ContainerListTrack>
                {trackList.map((t) => (
                  <ListTrack
                    id={t.id}
                    track={t.name}
                    artists={t.artists}
                    handleTrack={() => handleModalTrack(t.id)}
                  />
                ))}
              </ContainerListTrack>
            </>
          )}
        </Body>
      </Container>
    </>
  );
}

export default Home;
