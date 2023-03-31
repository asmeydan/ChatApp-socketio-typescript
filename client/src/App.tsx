import Input from "./components/Input";
import Messages from "./components/Messages";
import { useEffect, useState } from "react"
import { io } from "socket.io-client";

const App: React.FC = ()=>  {
  const [ text, setText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const socket = io('http://localhost:5000')

  useEffect(()=> {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.emit('chat message', text);
    setText('');
  };
  
  return (
    <div className=" h-screen  flex items-center justify-center px-10 sm:px-20 md:px-32 lg:px-48">
      <div className=" h-4/5 w-full  rounded-lg flex flex-col items-center overflow-hidden border border-black">
        <Messages text={text} messages={messages} />
        <Input text={text} setText={setText} handeSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
