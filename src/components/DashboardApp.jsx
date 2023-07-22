import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardHome,
  Profile,
  Ideas,
  Leaderboard,
  Task,
  Logout,
} from "../pages";
import Sidebar from "./Sidebar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
