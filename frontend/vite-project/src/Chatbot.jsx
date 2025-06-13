// import { useEffect, useState, useRef } from "react";
// import { FiMessageCircle, FiX } from "react-icons/fi";

// const ChatPopup = () => {
//     const [isOpen, setIsOpen] = useState(false); // to toggle the open/close of chat popup
//     const [userQuery, setUserQuery] = useState('')//  to store the user's input
//     const [answer, setAnswer] = useState('')
//     const [messages, setMessages] = useState([])
//     const bottomRef = useRef(null); //ref to keep the chat scrolled to the bottom
//     const inputRef = useRef(null); // ref to keep the input field focused

//     // Auto-scroll effect
//     useEffect(() => {
//         bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);
//     const handleSend = async (e) => {
//         e.preventDefault();
//         console.log(userQuery);

//         try {
//             const response = await fetch('http://localhost:3000/api/pattern-match', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ query: userQuery }) // Send it as an object
//             });
//             // console.log(response)
//             const data = await response.json();
//             console.log('Server response:', data);
//             setAnswer(data.answer)
//             setMessages([...messages, { user: userQuery, bot: data.answer }]) // Store the conversation
//             inputRef.current.focus()
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
//     useEffect(() => {
//         setUserQuery('')
//     }, [answer]);
//     // console.log("line no 30",answer)
//     return (
//         <div className="fixed bottom-6 right-6 z-50">
//             {isOpen ? (
//                 <div className="w-72 bg-white shadow-xl rounded-lg border border-gray-200">
//                     <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-t-lg">
//                         <h2 className="font-semibold">CodeThinkers</h2>
//                         <button onClick={() => setIsOpen(false)}>
//                             <FiX className="text-xl" />
//                         </button>
//                     </div>
//                     <div className="p-3 h-48 overflow-y-auto text-sm text-gray-800">

//                         <p className="mt-2">Feel free to ask about our services, courses,location,office Time  or anything else!</p>
//                     </div>
//                     {messages && (
//                         <div className="text-black max-h-96 overflow-y-auto bg-white p-4 rounded shadow-md">
//                             {messages.map((msg, index) => (
//                                 <div key={index} className="p-4 mb-4 bg-gray-100 rounded-lg shadow-sm">
//                                     <div className="font-semibold text-blue-600">Question:</div>
//                                     <div className="text-gray-800 mb-2">{msg.user}</div>
//                                     <div className="font-semibold text-green-600">Answer:</div>
//                                     <div className="text-gray-800">{msg.bot}</div>
//                                 </div>
//                             ))}
//                             <div ref={bottomRef} className="h-1"></div>
//                         </div>
//                     )}

//                     {/* Input field for user query */}
//                     <div className="p-2 border-t">
//                         <input
//                             ref={inputRef}
//                             type="text"
//                             value={userQuery}
//                             onChange={(e) => setUserQuery(e.target.value)}
//                             placeholder="Type a message..."
//                             className="w-full px-2 py-1 border text-black rounded focus:outline-none text-sm"
//                         />
//                     </div>

//                     <div className="p-2 border-t flex justify-end">
//                         <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
//                             Send
//                         </button>
//                     </div>
//                 </div>
//             ) : (
//                 <button
//                     onClick={() => setIsOpen(true)}
//                     className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
//                 >
//                     <FiMessageCircle className="text-2xl" />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ChatPopup;
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
            const response = await fetch('http://localhost:3000/api/pattern-match', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: userQuery }),
            });

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
