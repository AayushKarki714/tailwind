import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EnvelopeIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

let titles = [
  ["Apples newest iPhone is here", "Watch our July event"],
  [
    "Nintendo's Newsletter for July",
    "Introducing Strike, a 5-on-5 soccer game",
  ],
  ["Your fund have been processed", "See your latest deposit online"],
  ["This Week in Sports", "The finals are heating up"],
];

export default function Email() {
  const [messages, setMessages] = useState([...Array(9).keys()]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function addMessage() {
    let newId = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newId]);
  }

  function toggleMessage(mid) {
    if (selectedMessages.includes(mid)) {
      setSelectedMessages((selectedMessages) =>
        selectedMessages.filter((message) => message !== mid)
      );
    } else {
      setSelectedMessages((selectedMessages) => [...selectedMessages, mid]);
    }
  }

  function archiveMessage() {
    setMessages((messages) =>
      messages.filter((mid) => !selectedMessages.includes(mid))
    );
    setSelectedMessages([]);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 py-8 overscroll-y-contain bg-gradient-to-br from-slate-700 to-slate-900 text-slate-600">
      <div className="flex flex-1 w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-2xl">
        <div className="flex w-[45%] flex-col bg-slate-50 py-2">
          <div className="px-5 border-b">
            <div className="flex justify-between py-2 text-right">
              <button
                onClick={addMessage}
                className="px-2 py-1 rounded text-slate-400 hover:text-slate-500 active:bg-slate-200 "
              >
                <EnvelopeIcon className="w-5 h-5" />
              </button>
              <button
                onClick={archiveMessage}
                className="px-2 py-1 rounded text-slate-400 hover:text-slate-500 active:bg-slate-200 "
              >
                <ArchiveBoxIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <ul className="px-3 pt-2 overflow-y-scroll">
            <AnimatePresence initial={false}>
              {[...messages].reverse().map((mid) => (
                <motion.li
                  key={mid}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative "
                >
                  <div className="py-0.5">
                    <button
                      onClick={toggleMessage.bind(null, mid)}
                      className={`block ${
                        selectedMessages.includes(mid)
                          ? "bg-blue-500"
                          : "hover:bg-slate-100"
                      } w-full cursor-pointer truncate rounded py-3 px-3 text-left `}
                    >
                      <p
                        className={`truncate text-sm font-semibold ${
                          selectedMessages.includes(mid)
                            ? "text-white"
                            : "text-slate-500"
                        } `}
                      >
                        {titles[mid % titles.length][0]}
                      </p>
                      <p
                        className={`truncate text-xs ${
                          selectedMessages.includes(mid)
                            ? "text-blue-200"
                            : "text-slate-400 "
                        }`}
                      >
                        {titles[mid % titles.length][1]}
                      </p>
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { EnvelopeIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

// let titles = [
//   ["Apples newest iPhone is here", "Watch our July event"],
//   [
//     "Nintendo's Newsletter for July",
//     "Introducing Strike, a 5-on-5 soccer game",
//   ],
//   ["Your fund have been processed", "See your latest deposit online"],
//   ["This Week in Sports", "The finals are heating up"],
// ];

// export default function Email() {
//   const [messages, setMessages] = useState([...Array(9).keys()]);
//   const [selectedMessages, setSelectedMessages] = useState([]);

//   function addMessage() {
//     let newId = (messages.at(-1) || 0) + 1;
//     setMessages((messages) => [...messages, newId]);
//   }

//   function toggleMessage(mid) {
//     if (selectedMessages.includes(mid)) {
//       setSelectedMessages((selectedMessages) =>
//         selectedMessages.filter((message) => message !== mid)
//       );
//     } else {
//       setSelectedMessages((selectedMessages) => [...selectedMessages, mid]);
//     }
//   }

//   function archiveMessage() {
//     setMessages((messages) =>
//       messages.filter((mid) => !selectedMessages.includes(mid))
//     );
//     setSelectedMessages([]);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen px-6 py-8 overscroll-y-contain bg-gradient-to-br from-slate-700 to-slate-900 text-slate-600">
//       <div className="flex flex-1 w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-2xl">
//         <div className="flex w-[45%] flex-col bg-slate-50 py-2">
//           <div className="px-5 border-b">
//             <div className="flex justify-between py-2 text-right">
//               <button
//                 onClick={addMessage}
//                 className="px-2 py-1 rounded text-slate-400 hover:text-slate-500 active:bg-slate-200 // "
//               >
//                 <EnvelopeIcon className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={archiveMessage}
//                 className="px-2 py-1 rounded text-slate-400 hover:text-slate-500 active:bg-slate-200 // "
//               >
//                 <ArchiveBoxIcon className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//           <ul className="px-3 pt-2 overflow-y-scroll">
//             <AnimatePresence initial={false}>
//               {[...messages].reverse().map((mid) => (
//                 <motion.li
//                   key={mid}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="relative "
//                 >
//                   <div className="py-0.5">
//                     <button
//                       onClick={toggleMessage.bind(null, mid)}
//                       className={`block ${
//                         selectedMessages.includes(mid)
//                           ? "bg-blue-500"
//                           : "hover:bg-slate-100"
//                       } w-full cursor-pointer truncate rounded py-3 px-3 text-left `}
//                     >
//                       <p
//                         className={`truncate text-sm font-semibold ${
//                           selectedMessages.includes(mid)
//                             ? "text-white"
//                             : "text-slate-500"
//                         } `}
//                       >
//                         {titles[mid % titles.length][0]}
//                       </p>
//                       <p
//                         className={`truncate text-xs ${
//                           selectedMessages.includes(mid)
//                             ? "text-blue-200"
//                             : "text-slate-400 "
//                         }`}
//                       >
//                         {titles[mid % titles.length][1]}
//                       </p>
//                     </button>
//                   </div>
//                 </motion.li>
//               ))}
//             </AnimatePresence>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
