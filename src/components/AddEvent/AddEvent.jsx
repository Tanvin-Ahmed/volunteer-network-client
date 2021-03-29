import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
    };
    console.log(eventData);

    if (eventData.imageURL !== null) {
      fetch(`https://evening-shore-20176.herokuapp.com/addEvent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "785be335abfe8116c2bb9a46ed6e4c98");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((data) => {
        setImageURL(data.data.data.display_url);
        console.log(data.data.data.display_url);
      })
      .then((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="New Event" ref={register} />

      <input name="img_url" type="file" onChange={handleImageUpload} />

      <input type="submit" />
    </form>
  );
};

export default AddEvent;
