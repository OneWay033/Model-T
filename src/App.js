import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trend_child from "./componnents/pege1/Trend_child";
import Trainprogram from "./componnents/pege2/Trainprogram";
import { LoginForm } from "./componnents/LoginFrom/LoginForm";
import CreateTraining from "./componnents/pege2/CreateTraining";
import Admin_dashboard from './componnents/admin/Admin-dashboard';
import Edit_clients from "./componnents/pege1/Edit_client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Trend_child" element={<Trend_child />} />
        <Route path="/Edit-client/:id" element={<Edit_clients />} />

        <Route path="/CreateTraining" element={<CreateTraining />} />
        <Route path="/Trainprogram" element={<Trainprogram />} />

        {/* admin */}
        <Route path='/Admin-dashboard' element={<Admin_dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
