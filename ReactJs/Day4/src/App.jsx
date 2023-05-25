import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("UI is Rendering");
  }, []);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
