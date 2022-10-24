import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");

  async function sendMessage() {
    const response = await fetch("http://localhost:3000/api/messages/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    }).then((res) => console.log(res));

    setMessage("");
    alert("Message has been sent");
    return response;
  }

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
    console.log(message);
  };
  return (
    <div>
      <h1>Click Here to Login to view Messages</h1>
      <div className="bg-white-100 h-screen overflow-hidden flex items-center justify-center flex-col">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-white-700">
              Enter an anonymous message below
            </label>
            <textarea
              onChange={handleMessageChange}
              value={message}
              className="
        form-control
        block
        w-full
        h-48
        resize-none
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              // rows=3
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="flex space-x-2 justify-center"></div>

        <button
          onClick={sendMessage}
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Home;
