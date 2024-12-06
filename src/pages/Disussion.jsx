import React, { useState, useEffect } from "react";
import axios from "axios";

const Discussion = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("YOUR_BACKEND_URL/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleNewPost = async () => {
    try {
      await axios.post("YOUR_BACKEND_URL/api/posts", { content: newPost });
      setNewPost("");
      fetchPosts();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      await axios.post(`YOUR_BACKEND_URL/api/posts/${postId}/comments`, {
        content: comment,
      });
      fetchPosts();
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="container">
      <h2>Discussion Forum</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something..."
        />
        <button
          className="btn btn-success mt-2"
          onClick={handleNewPost}
        >
          Post
        </button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.content}</h5>
              <ul>
                {post.comments.map((comment) => (
                  <li key={comment._id}>{comment.content}</li>
                ))}
              </ul>
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleComment(post._id, prompt("Write a comment:"))
                }
              >
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
