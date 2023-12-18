import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Matches from "./pages/Matches";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/table" element={<Leaderboard />} />
            <Route path="/" element={<Matches />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
