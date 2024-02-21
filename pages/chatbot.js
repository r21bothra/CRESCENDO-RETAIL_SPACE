import React from "react";
import { useSelector } from "react-redux";
import SeoHead from "../components/seo/SeoHead";
import Header from "../components/header/Header";
import Mobile_Header from "../components/header/Mobile_Header";

const Chatbot = () => {
  const [message, setMessages] = React.useState([]);
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = React.useState("");
  //   const [initialMessageState, setInitialMessage] = React.useState(true);
  const handlesubmit = async () => {
    setMessages((state) => [...state, input]);
    setMessages((state) => [...state, "Loading..."]);
    const response = await fetch("http://localhost:3005/chat_with_ai", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        message: input,
      }),
    });
    let decoder = new TextDecoderStream();
    const reader = response.body.pipeThrough(decoder).getReader();
    var lastMessage = "";
    // setInitialMessage(false);
    // setimage((prev) => [...prev, false]);
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        lastMessage = lastMessage + value;
        updatedMessages[updatedMessages.length - 1] = lastMessage;
        return updatedMessages;
      });
    }
    setInput("");
  };
  React.useEffect(() => {
    document.querySelector("body").style.background = "#1e1e1e";

    // Cleanup function to revert background color when the component unmounts
    return () => {
      document.querySelector("body").style.background = ""; // Revert to default background color
    };
  }, []);

  return (
    <>
      <SeoHead title="Chat" />
      <Header />
      <Mobile_Header />
      <div className="ChatWindow">
        {message.map((item, idx) => {
          var messageArr = item.split("```");
          return idx % 2 !== 0 ? (
            <div className="ChatItem ChatItem--customer">
              <div className="ChatItem-meta">
                <div className="ChatItem-avatar">
                  <img
                    className="ChatItem-avatarImage"
                    src="https://image.ibb.co/eTiXWa/avatarrobot.png"
                  />
                </div>
              </div>
              {/* {messageArr.map((item, index) => {
                return ( */}
              <div className="ChatItem-chatContent">
                <div className="ChatItem-chatText">{item}</div>
              </div>
              {/* );
              })} */}
            </div>
          ) : (
            <div className="ChatItem ChatItem--expert">
              <div className="ChatItem-meta">
                <div className="ChatItem-avatar">
                  <img
                    className="ChatItem-avatarImage"
                    src="https://randomuser.me/api/portraits/women/0.jpg"
                  />
                </div>
              </div>
              <div className="ChatItem-chatContent">
                <div className="ChatItem-chatText">{item}</div>
              </div>
            </div>
          );
        })}

        <div className="ChatInput is-hidey">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            className="ChatInput-input"
            contenteditable="true"
            placeholder="Type your message here..."
          ></input>
          <button
            style={{
              position: "absolute",
              right: "10px",
              fontSize: "40px",
              top: "10px",
              color: "black",
            }}
            onClick={handlesubmit}
          >
            ➲
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
