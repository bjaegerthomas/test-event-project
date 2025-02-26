import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../api/eventsAPI.tsx"; // Import the API function

const Create = () => {
  const [event, setEvent] = useState({
    id: 0,
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent(event); // Use the extracted function
      navigate("/"); // Redirect to Home page after successful creation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Create New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={event.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={event.description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="datetime-local" name="date" value={event.date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={event.location} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Save Event</button>
      </form>
    </div>
  );
};

export default Create;
