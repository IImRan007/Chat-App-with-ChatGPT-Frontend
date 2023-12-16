import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { UserContext } from "../context/user/UserContext";

const Message = () => {
  const [conversations, setConversations] = useState(null);
  const [message, setMessage] = useState("");
  const params = useParams();

  const { userState } = useContext(UserContext);

  const getConversation = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/conversation/${params.id}`
      );
      setConversations(response.data.data.messages);
    } catch (error) {
      console.error("Error fetching conversation:", error.message);
    }
  };

  useEffect(() => {
    getConversation();
  }, [params]);

  console.log(userState);

  const onConversation = async () => {
    const data = {
      userId: userState?.user?._id,
      title: params.title,
      messages: [
        {
          text: message,
        },
      ],
    };
    const response = await axios.post(
      `http://localhost:9000/api/conversation`,
      data
    );

    console.log(response);
    if (response.data.success === true) {
      getConversation();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full bg-gray-100">
        <div className="w-full h-[80vh] p-20 overflow-y-auto">
          {conversations && conversations.length > 0 ? (
            conversations.map((message, index) => (
              <div
                key={index}
                className={`chat ${
                  message.role === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-bubble">{message.content}</div>
              </div>
            ))
          ) : (
            <p>No messages available.</p>
          )}
        </div>
        <div className="w-full h-[14.2vh] flex justify-center">
          <label className="form-control w-full max-w-xs mr-[25rem] mt-2">
            <div className="input-group">
              <span className="label">
                <span className="label-text">Message ChatGPT...</span>
              </span>
              <div className="flex items-center w-[40rem] gap-x-1">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-[40rem]"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn btn-neutral" onClick={onConversation}>
                  <IoMdSend />
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Message;
