import { Suspense, use, useState } from "react";

// Simulate fetching a message
const fetchMessage = (): Promise<string> => {
  const messages = [
    "⚛️ React 19 is awesome!",
    "🚀 Building amazing apps!",
    "💡 Learning new features!",
    "🎉 Code is working great!",
    "✨ Magic is happening!",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return new Promise((resolve) => setTimeout(resolve, 1000, randomMessage));
};

// MessageOutput component
const MessageOutput = ({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) => {
  const messageContent = use(messagePromise);
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-md">
      <p className="text-xl font-semibold text-green-800">
        📬 {messageContent}
      </p>
    </div>
  );
};

// MessageContainer component
const MessageContainer = ({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) => {
  return (
    <Suspense
      fallback={
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-md animate-pulse">
          <p className="text-xl font-semibold text-blue-800">
            ⌛ Downloading message...
          </p>
        </div>
      }
    >
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

// Message component
const Message = () => {
  const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(
    null
  );
  const [show, setShow] = useState(false);

  const handleDownload = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  const handleReset = () => {
    setShow(false);
    setMessagePromise(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Promise Resolution Demo
        </h2>
        <p className="text-gray-600">
          Click the button to fetch and display a random message using the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">use()</code>{" "}
          hook
        </p>
      </div>

      <div className="space-y-4">
        {show && messagePromise ? (
          <>
            <MessageContainer messagePromise={messagePromise} />
            <div className="flex gap-3 justify-center">
              <button
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleDownload}
              >
                🔄 Download Another
              </button>
              <button
                className="cursor-pointer bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={handleReset}
              >
                ↺ Reset
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <button
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
              onClick={handleDownload}
            >
              📥 Download Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Message as UseExample3 };
