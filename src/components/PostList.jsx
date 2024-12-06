import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://discussion-backend-2.onrender.com/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://discussion-backend-2.onrender.com/api/posts/${id}/comments`, { text: comment });
      setComment('');
      alert('Comment added!');
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {post.comments.map((c, index) => (
          <li key={index}>{c.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default PostDetails;
