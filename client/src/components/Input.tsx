import React from "react";

type Props = {
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  handeSubmit: any
}

const Input: React.FC<Props> = ({ text, setText, handeSubmit}) => {
  
  return (
    <form className=" h-20 w-full bg-emerald-200 px-10 border-t border-black flex items-center justify-center gap-2" onSubmit={handeSubmit}>
      <input
        type="text"
        className=" h-10 w-4/5 bg-white border border-black rounded-md pl-4"
        onChange={(e)=> setText(e.target.value)}
        value={text}
      />
      <button className="h-10 bg-fuchsia-800 text-white rounded-md px-2" type="submit">
        Gönder
      </button>
    </form>
  );
};

export default Input;
