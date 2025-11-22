// src/App.jsx
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AuthForm from "./components/AuthForm";
import Form from "./form";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/generate" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
