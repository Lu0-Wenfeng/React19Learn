import { useOptimistic, useRef, useState, useTransition } from "react";

// Types
interface Message {
  text: string;
  sending?: boolean;
}

interface MessageFormProps {
  addOptimisticMessage: (message: string) => void;
  sendMessage: (formData: FormData) => Promise<void>;
}

interface ThreadProps {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}

// Component: MessageForm
const MessageForm = ({
  addOptimisticMessage,
  sendMessage,
}: MessageFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [, startTransition] = useTransition();

  const formAction = async (formData: FormData) => {
    const messageText = formData.get("message") as string;

    if (!messageText?.trim()) return;

    // Wrap the optimistic update in startTransition
    startTransition(() => {
      addOptimisticMessage(messageText);
    });

    // Clear the form
    formRef.current?.reset();

    await sendMessage(formData);
  };

  return (
    <form action={formAction} ref={formRef} className="flex items-center mb-5">
      <input
        type="text"
        name="message"
        placeholder="Hello!"
        required
        className="border border-gray-300 rounded py-1 px-2 mr-2 focus:outline-none focus:border-blue-500 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

// Component: Thread
const Thread = ({ messages, sendMessage }: ThreadProps) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string): Message[] => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className="w-full max-w-2xl">
      <MessageForm
        addOptimisticMessage={addOptimisticMessage}
        sendMessage={sendMessage}
      />
      <div className="space-y-2">
        {optimisticMessages.map((message, index) => (
          <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
            <span className="text-gray-800">{message.text}</span>
            {message.sending && (
              <small className="ml-2 text-gray-500 italic">(Sending...)</small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function: Simulate message delivery
const deliverMessage = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return message;
};

// Main Component: MessageBox
const MessageBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (formData: FormData): Promise<void> => {
    const messageText = formData.get("message") as string;
    const sentMessage = await deliverMessage(messageText);

    setMessages((prevMessages) => [...prevMessages, { text: sentMessage }]);
  };

  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export { MessageBox as UseOptimisticExample };
