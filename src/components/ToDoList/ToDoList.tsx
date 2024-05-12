import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import ToDoModal from "../ToDoModal/ToDoModal";

export type ToDoListProps = {
  name: string;
};

export type List = {
  note: string;
  time: string;
};

const ToDoList = ({ name }: ToDoListProps) => {
  const [list, setList] = useState<List[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setList([
      {
        note: "hello",
        time: "01/02/03",
      },
      {
        note: "world",
        time: "01/02/03",
      },
      {
        note: "hello",
        time: "01/02/03",
      },
      {
        note: "world",
        time: "01/02/03",
      },
      {
        note: "hello",
        time: "01/02/03",
      },
      {
        note: "world",
        time: "01/02/03",
      },
    ]);
  }, []);

  return (
    <>
      <div className="list-container">
        <div className="header-container">
          <h1 className="list-header">{name}'s to do list</h1>
          <button onClick={() => setShowModal(true)} className="add-button">
            +
          </button>
        </div>
        <div>
          <ul className="todo-ul">
            {list.map((item) => (
              <div className="list-item">
                <li key={Math.random()} className="">
                  {item.note}s
                </li>
                <input type="checkbox" />
              </div>
            ))}
          </ul>
        </div>
      </div>
      {!!showModal && (
        <div className="modal-overlay">
          <ToDoModal
            setList={setList}
            setShowModal={setShowModal}
            list={list}
          />
        </div>
      )}
    </>
  );
};

export default ToDoList;
