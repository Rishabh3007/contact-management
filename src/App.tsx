import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
