import "./App.css";
import { Modal } from "./Modal/Modal";
import { FeedPage } from "./pages/Feed/FeedPage";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <FeedPage handleModal={handleModal} />
      <Modal modalState={modalState} setModalState={setModalState} />
    </>
  );
}

export default App;
