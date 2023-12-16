const WelcomPage = () => {
  return (
    <div className="flex flex-col h-[94.2vh] items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Chat App!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Start chatting with our ChatGPT-powered assistant. Click the &quot;New
        Chat&quot; button to create a new conversation.
      </p>
      <button className=" bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        New Chat
      </button>
    </div>
  );
};

export default WelcomPage;
