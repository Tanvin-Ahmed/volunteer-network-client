import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  const loadedData = () => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };
  useEffect(() => {
    loadedData();
  }, []);
  return (
    <div className="row m-auto">
      {events.map((event) => (
        <Event key={event._id} event={event} loadedData={loadedData}></Event>
      ))}
    </div>
  );
};

export default Home;
