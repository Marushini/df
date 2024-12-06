import React, { useState } from "react";
import axios from "axios";

const CommentBox = ({ postId, comments, fetchPost }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://discussion-backend-2.onrender.com/api/posts/${postId}/comments`, {
        text: newComment,
      });
      setNewComment("");
      fetchPost(); // Refresh the post details
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (commentId) => {
    try {
      await axios.post(`https://discussion-backend-2.onrender.com/api/posts/${postId}/comments/${commentId}/like`);
      fetchPost(); // Refresh the post details
    } catch (error) {
      console.log(error);
    }
  };

  const handleReply = async (commentId, replyText) => {
    try {
      await axios.post(`https://discussion-backend-2.onrender.com/api/posts/${postId}/comments/${commentId}/replies`, {
        text: replyText,
      });
      fetchPost(); // Refresh the post details
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment-box mt-4">
      <h4>Comments</h4>
      <ul className="list-group">
        {comments.map((comment) => (
          <li key={comment._id} className="list-group-item">
            <div>
              <strong>{comment.text}</strong>
              <button
                className="btn btn-sm btn-outline-primary mx-2"
                onClick={() => handleLike(comment._id)}
              >
                Like ({comment.likes})
              </button>
            </div>
            <ul>
              {comment.replies.map((reply) => (
                <li key={reply._id}>{reply.text}</li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const replyText = e.target.elements.reply.value;
                handleReply(comment._id, replyText);
                e.target.elements.reply.value = "";
              }}
            >
              <input
                type="text"
                name="reply"
                className="form-control my-2"
                placeholder="Write a reply..."
              />
              <button type="submit" className="btn btn-sm btn-secondary">
                Reply
              </button>
            </form>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="mt-3">
        <textarea
          className="form-control"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary mt-2">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
