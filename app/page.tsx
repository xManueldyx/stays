'use client';

import React from "react";
import Login from "../components/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Homepage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home"/>
      </Routes>
    </BrowserRouter>
  );
}
