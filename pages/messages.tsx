import type { NextPage } from "next";

const Messages = () => {
  const data = [
    { id: 1, message: "Hello word!" },
    { id: 2, message: "Hello word!" },
    { id: 3, message: "Hello word!" },
  ];

  return data.map(({ id, message }) => {
    <p key={id}>
      {id} - {message}
    </p>;
  });
};
export default Messages;
