import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GraphPage from "./pages/GraphPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Req from "./pages/ReqPage"
import UserContextProvider from "./contexts/userContext";
import Favicon from "react-favicon";
import FaviconPng from './img/favicon.png';

function App() {
  return (
    <UserContextProvider>
      <Favicon url={[FaviconPng]}></Favicon>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/req" element={<Req />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
