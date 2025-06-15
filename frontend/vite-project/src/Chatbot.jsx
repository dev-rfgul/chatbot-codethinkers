
import { useEffect, useState, useRef } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userQuery, setUserQuery] = useState('');
    const [answer, setAnswer] = useState('');
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!userQuery.trim()) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/pattern-match`, {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: userQuery }),
            });
            console.log(response)
            const data = await response.json();
            setAnswer(data.answer);
            setMessages([...messages, { user: userQuery, bot: data.answer }]);
            setUserQuery('');
            inputRef.current.focus();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="w-80 h-[32rem] bg-white shadow-2xl rounded-lg border border-gray-300 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3">
                        <h2 className="font-semibold">CodeThinkers</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <FiX className="text-xl" />
                        </button>
                    </div>

                    {/* Welcome Message */}
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        Feel free to ask about our services, courses, location, office hours, or anything else!
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3 text-sm bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400">
                        {messages.map((msg, index) => (
                            <div key={index} className="bg-white p-3 rounded-md shadow-sm border">
                                <div className="text-blue-600 font-semibold mb-1">You:</div>
                                <div className="text-gray-800 mb-2">{msg.user}</div>
                                <div className="text-green-600 font-semibold mb-1">Bot:</div>
                                <div className="text-gray-800">{msg.bot}</div>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input Field */}
                    <form onSubmit={handleSend} className="border-t px-3 py-2 bg-white flex gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={userQuery}
                            onChange={(e) => setUserQuery(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 text-black text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
                        >
                            Send
                        </button>
                    </form>
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
