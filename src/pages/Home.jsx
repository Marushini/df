import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to the Discussion Forum</h1>
        <p className="text-muted">
          Share your thoughts, interact with others, and engage in meaningful discussions.
        </p>
        <div>
          <Link to="/login" className="btn btn-primary mx-2">
            Login
          </Link>
          <Link to="/discussion" className="btn btn-secondary mx-2">
            Go to Discussions
          </Link>
        </div>
      </header>
      <section className="mt-4">
        <h2>How It Works</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Post Topics</h5>
                <p className="card-text">
                  Create topics to discuss with the community and express your ideas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Comment & Reply</h5>
                <p className="card-text">
                  Engage with others by commenting and replying to their posts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Like & Interact</h5>
                <p className="card-text">
                  Show your appreciation by liking posts and engaging with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
