import React from "react";

type Props = {
  text: string;
  messages: string[];
};

const Messages: React.FC<Props> = ({ text, messages }) => {
  return (
    <div className="w-full flex-1 flex flex-col gap-1 bg-sky-200 px-10 pt-4 border-b border-black overflow-y-auto">
      {messages.map((e) => (
        <div key={e} className=" bg-yellow-200 w-fit pl-2 pr-6 rounded-md">{e}</div>
      ))}
    </div>
  );
};

export default Messages;
