import React from "react";
import { useState, useEffect } from "react";
import data from "./data.js";
import Tours from "./components/Tours";
import "./App.css";

const App = () => {
  const [tours, setTours] = useState(data);
  const [emptyPage, setEmptyPage] = useState(false);


  useEffect(() => {
    if (tours.length === 0) {
      setEmptyPage(true);
    }
  }, []);


  function refreshHandler(){
    setTours(data);
    setEmptyPage(false);
  }
  function removeTour(id) {
    const newTour = tours.filter((tour) => {
      return tour.id !== id;
    });
   
    if (Object.keys(newTour).length === 0) {
      
      setEmptyPage(true);
    }
    setTours(newTour);
  }

  return (
  <>
    {emptyPage ? (
      <div className="refresh">
        <h2 className="page-title">No Tours Left</h2>
        <button className="refresh-button" onClick={refreshHandler}>
          Refresh
        </button>
      </div>
    ) : (
      <div className="tours-container">
        <h2 className="page-title">Plan with Vinayak</h2>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    )}
  </>
);


}
export default App;
