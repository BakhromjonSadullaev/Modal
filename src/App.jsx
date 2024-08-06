import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  let [showModal, setShowModal] = useState(false);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <button
        className="text-xl py-2 px-4 rounded-md bg-purple text-white hover:bg-outLineClr"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
