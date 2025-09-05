import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import Webinar from "./components/Webinar";

import "./App.css";
import PaymentVerifyPage from "./components/PaymentVerifyPage";
import PaymentPage from "./components/PaymentPage";
import PaymentRetryPage from "./components/PaymentRetryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/verify" element={<PaymentVerifyPage />} />
        <Route path="/payment/retry" element={<PaymentRetryPage />} />
      </Routes>
    </Router>
  );
}
export default App;
