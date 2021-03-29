import React from "react";

const Event = ({ event, loadedData }) => {
  const deleteEvent = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/deleteEvent/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          loadedData();
        }
      });
  };
  return (
    <div>
      <div className="col-md-3 m-auto">
        <img
          style={{ height: "300px", width: "15rem" }}
          src={event.imageURL}
          alt=""
        />
        <h3>{event.name}</h3>
        <button
          className="btn btn-danger"
          onClick={() => deleteEvent(event._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Event;
