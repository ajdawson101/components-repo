import React from "react";
import "./Message.css";

const Message = ({ count }: { count: number }) => {
  return <p className="text">You have got advice {count} times</p>;
};

export default Message;
