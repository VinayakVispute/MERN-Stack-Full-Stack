import { useState } from "react";
import { getImageUrl } from "./utils/utils.js";
import "./App.css";
import Names from "./components/Names";
import NameDates from "./components/NameDates";
function Avtar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function App() {
  return (
    <div>
      <Names FirstName={"Vinayak"} LastName={"Vispute"} />

      <NameDates day={22} month={"May"} year={2023}>
        <img src={getImageUrl("YfeOqp2")}></img>
      </NameDates>
    </div>
  );
}

export default App;
