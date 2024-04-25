import { Route, Routes } from "react-router-dom";
import Communal from "./pages/Communal";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages/app.css";
import MainPage from "./pages/MainPage";
import Transportation from "./pages/Transportation";
import Train from "./pages/Train";
import Carpark from "./pages/Carpark";
import Bus from "./pages/Bus";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/community" element={<Communal />} />
        <Route path="/transport" element={<Transportation />} />
        <Route path="/transport/train" element={<Train />} />
        <Route path="transport/car" element={<Carpark />} />
        <Route path="transport/bus" element={<Bus />} />
      </Routes>
    </>
  );
}
