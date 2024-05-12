import { useState } from "react";
import { List } from "../ToDoList/ToDoList";
import "./ToDoModal.css";

export type toDoModalProps = {
  setList: React.Dispatch<React.SetStateAction<List[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  list: List[];
};

const ToDoModal = ({ setList, setShowModal, list }: toDoModalProps) => {
  const [todo, setTodo] = useState<List>({ note: "", time: "" });
  const handleSubmit = (event: React.FormEvent) => {
    setList([...list, todo]);
    event.preventDefault();
    setTodo({ note: "", time: "" });
    setShowModal(false);
  };

  console.log(todo);

  return (
    <div className="modal-container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={todo.note}
            onChange={(e) => {
              setTodo({ ...todo, note: e.target.value });
            }}
            placeholder="Enter a to do"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ToDoModal;
