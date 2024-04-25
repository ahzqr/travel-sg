import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Communal from "./pages/Communal";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/communal" element={<Communal />} />
        {/* <Route path="/games" element={<Games />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/games/:game_id" element={<GameDetails />} /> */}
      </Routes>
    </>
  );
}
