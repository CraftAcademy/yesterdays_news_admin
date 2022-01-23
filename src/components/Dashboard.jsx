import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { welcomeMessage } = useSelector(state => state);
  const navigate = useNavigate();

  return (
    <div>
      <h1 data-cy="flash-message">{welcomeMessage}</h1>
      <button data-cy="create-article-btn" onClick={() => navigate("/article/create")}>
        Create new article
      </button>
    </div>
  );
};

export default Dashboard;