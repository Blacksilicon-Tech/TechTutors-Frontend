import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
// import Webinar from "./components/Webinar";

import "./App.css";
import PaymentVerifyPage from "./pages/PaymentVerifyPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentRetryPage from "./pages/PaymentRetryPage";

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />

      {/* <Route path="/webinar" element={<Webinar />} /> */}

      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/payment/verify" element={<PaymentVerifyPage />} />
      <Route path="/payment/retry" element={<PaymentRetryPage />} />
    </Routes>

  );
}
export default App;
