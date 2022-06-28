import React, { FormEvent, ChangeEvent, useState } from "react";

const MainComponent: React.FC = () => {
   const [text, setText] = useState("");

   const submitHandler = (e: FormEvent) => {
      e.preventDefault();

      setText("");
   };

   const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   };
   return (
      <>
         <form onSubmit={submitHandler}>
            <input type="text" onChange={textHandler} />
            {} <div>{text}</div>
            <button type="submit">Click me</button>
         </form>
      </>
   );
};

export default MainComponent;
