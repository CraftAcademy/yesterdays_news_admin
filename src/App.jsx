import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticleView from "./components/CreateArticleView";
import Dashboard from "./components/Dashboard";
import HomeView from "./components/HomeView";
import RegistrationForm from "./components/RegistrationForm";
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="article/create" element={<CreateArticleView />} />
      </Routes>
    </Container>
  );
};

export default App;
