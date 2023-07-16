import "./App.css";
import { Modal } from "./modal/Modal";
import { FeedPage } from "./pages/Feed/FeedPage";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(true);

  const handleModal = (placeInfo) => {
    setModalState(!modalState);
    setInfoModal(placeInfo);
  };

  return (
    <>
      <FeedPage handleModal={handleModal} />
      <Modal modalState={modalState} setModalState={setModalState} />
    </>
  );
}

export default App;
