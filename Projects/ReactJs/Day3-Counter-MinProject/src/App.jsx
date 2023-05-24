import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
    const previousCount = count;
    const newCount = count - 1;
    setCount(newCount);
  
  }

  function increaseHandler(){
    const previousCount = count;
    const newCount = count + 1;
    setCount(newCount);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-[#344151] gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment &  Decrement</div>
      <div className="flex flex-row justify-center gap-12 py-3 rounded-sm text-[25px] bg-white">
        <button onClick = {decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className = "font-bold gap-12 text-5xl">{count}</div>
        <button onClick = {increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick = {resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;
