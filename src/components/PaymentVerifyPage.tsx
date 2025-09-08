import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Spinner = () => (
  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
);

const PaymentVerifyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Checking payment...");
  const [loading, setLoading] = useState(true);

  // 🔹 Paystack usually returns `reference`, not `tx_ref`
  const ref =
    searchParams.get("reference") ||
    searchParams.get("trxref") ||
    searchParams.get("tx_ref") ||
    sessionStorage.getItem("txRef");

  useEffect(() => {
    if (!ref) {
      navigate("/payment");
      return;
    }

    // Save for later retries
    sessionStorage.setItem("txRef", ref);

    const checkStatus = async () => {
      try {
        const res = await fetch(
          "https://api-growtechafrica.blacksillicon.com/api/payments/status?reference=${ref}",
          {
            method: "GET",
          }
        );

        if (!res.ok) throw new Error("Verification failed");

        const data = await res.json();
        const paymentStatus = data.status;

        if (paymentStatus === "SUCCESSFUL") {
          setStatus("✅ Payment successful! Redirecting...");
          setLoading(false);
          setTimeout(() => navigate("/"), 2000);
        } else if (paymentStatus === "FAILED") {
          setStatus("❌ Payment failed. Redirecting to retry...");
          setLoading(false);
          setTimeout(() => navigate(`/payment/retry?tx_ref=${ref}`), 2000);
        } else {
          setStatus("⏳ Payment still pending... checking again.");
          setLoading(true);
          setTimeout(checkStatus, 5000); // poll every 5s
        }
      } catch (err: any) {
        setStatus(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    checkStatus();
  }, [ref, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      {loading && <Spinner />}
      <p className="text-gray-700 text-lg">{status}</p>
    </div>
  );
};

export default PaymentVerifyPage;
