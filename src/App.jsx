import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import "./css/Sidebar.css";

import { Dashboard, Profile, Ideas, Leaderboard, Task, Logout } from "./pages";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
