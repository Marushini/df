import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReply = async () => {
    try {
      await axios.post(`${BASE_URL}/posts/${id}/replies`, { content: newReply });
      setNewReply("");
      fetchPost(); // Refresh the post data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h4>Replies</h4>
          <ul>
            {post.replies.map((reply) => (
              <li key={reply._id}>{reply.content}</li>
            ))}
          </ul>
          <textarea
            className="form-control"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <button onClick={handleReply} className="btn btn-primary mt-2">
            Add Reply
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
