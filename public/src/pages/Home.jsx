import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const res = await axios.get("https://discussion-backend-2.onrender.com/api/topics");
      setTopics(res.data.result);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="row">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div className="col-md-4" key={topic._id}>
              <PostCard post={topic} />
            </div>
          ))
        ) : (
          <p>No topics found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
