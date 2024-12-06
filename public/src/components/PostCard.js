import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5>{post.title}</h5>
      </div>
      <div className="card-body">
        <p>{post.content.slice(0, 100)}...</p>
        <Link to={`/post/${post._id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span>Likes: {post.likes}</span>
        <span>Replies: {post.replies.length}</span>
      </div>
    </div>
  );
};

export default PostCard;
