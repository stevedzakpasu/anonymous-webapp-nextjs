import type { NextPage } from "next";
import FlatList from "flatlist-react";
import { useState, useEffect } from "react";

const Messages: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const requestOptions = {
        method: "GET",
      };

      const response = await fetch(
        "http://localhost:3000/api/get_messages/",
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("error");
      } else {
        setData(data);
      }
    };

    getMessages();
  }, []);

  const renderMessage = (messages: any, idx: any) => {
    return (
      <li key={idx}>
        {messages.id}.{messages.message}
      </li>
    );
  };
  return (
    <div className="bg-white-100 h-screen overflow-hidden flex items-center justify-center flex-col">
      <ul>
        <h1>Here are the messages</h1>
        <FlatList
          list={data}
          renderItem={renderMessage}
          renderWhenEmpty={() => <div>List is empty!</div>}
          sortBy={["id", { key: "id", descending: true }]}
        />
      </ul>
    </div>
  );
};

export default Messages;
