import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { UserContext } from "../context/user/UserContext";

const HomePage = () => {
  const [conversations, setConversations] = useState(null);
  const { userState } = useContext(UserContext);

  const getConversations = async () => {
    const response = await axios.get(
      `http://localhost:9000/api/conversation/${userState?.user?._id}`
    );

    if (response.data.success === true) {
      setConversations(response.data.conversation);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);
  return (
    <aside className="flex h-[94.2vh] w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <div className="-mx-3">
        <Link
          className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300  hover:text-gray-300 bg-black justify-between"
          to={"/"}
        >
          <span className="mx-2 text-sm font-medium">New Chat</span>
          <GrAddCircle />
        </Link>
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              chats
            </label>
            {conversations &&
              conversations.map((elem) => (
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300  hover:text-gray-300 bg-black"
                  to={`/conversation/${elem._id}`}
                  key={elem._id}
                >
                  {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
                  <span className="mx-2 text-sm font-medium">{elem.title}</span>
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default HomePage;
