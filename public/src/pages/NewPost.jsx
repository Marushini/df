import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://discussion-backend-2.onrender.com/api/topics", formData);
      setSuccessMessage("Post created successfully!");
      setErrorMessage("");
      setFormData({ title: "", content: "" }); // Clear form fields
    } catch (error) {
      console.error("Error creating post:", error);
      setErrorMessage("Failed to create the post. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Post</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="5"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
