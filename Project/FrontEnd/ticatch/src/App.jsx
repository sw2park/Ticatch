import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Login from "./signUp/LoginForm";
import AddMemberForm from "./signUp/addMemberForm";
import "./signUp/login.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AddMemberForm />} />
        <Route path="/" element={<div>홈 페이지</div>} />
      </Routes>
    </Router>
  );
}

export default App;
