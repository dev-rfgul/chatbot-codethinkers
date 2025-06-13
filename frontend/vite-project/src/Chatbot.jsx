import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSend = () => {
        // Handle sending message logic here
        console.log("Message sent!");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="w-72 bg-white shadow-xl rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-t-lg">
                        <h2 className="font-semibold">ChatBot</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <FiX className="text-xl" />
                        </button>
                    </div>
                    <div className="p-3 h-48 overflow-y-auto text-sm text-gray-800">
                        <p>Welcome to Code Thinkers!!!How can I help you today?</p>
                        {/* Add messages here */}
                    </div>
                    <div className="p-2 border-t">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full px-2 py-1 border text-black rounded focus:outline-none text-sm"
                        />
                    </div>
                    <div className="p-2 border-t flex justify-end">
                        <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                            Send
                        </button>
                        </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                >
                    <FiMessageCircle className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default ChatPopup;
