import React, { useEffect, useState } from "react";
import Tours from "./Tours.js";
import Loading from "./Loading.js";
import toursData from "./data";
import "regenerator-runtime/runtime";

function App() {
  const [tours, setTours] = useState(toursData);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    let updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <>
        <h1>No tours left</h1>
        <button onClick={() => setTours(toursData)}>Refresh</button>
      </>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
