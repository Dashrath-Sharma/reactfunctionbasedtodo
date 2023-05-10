import React, { useState } from "react";
import Modal from "./Modal";

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getTodo(e) {
    setTodo(e.target.value);
  }

  function sendTodo() {
    if (!todo) {
      setIsModalOpen(true);
      return;
    }
    props.saveData(todo);
    setTodo("");
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="input-group mb-3 mt-5">
      {isModalOpen ? (
        <Modal
          closing={closeModal}
          message={"never Submit Empty. Add a Todo!! :)"}
        />
      ) : (
        false
      )}
      <input
        type="text"
        className="form-control"
        placeholder="What's on your mind"
        aria-label="What's on your mind"
        aria-describedby="button"
        onChange={getTodo}
        value={todo}
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        id="button"
        onClick={sendTodo}
      >
        Button
      </button>
    </div>
  );
}
