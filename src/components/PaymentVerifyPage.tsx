import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentVerifyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying payment...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reference =
      searchParams.get("reference") || searchParams.get("trxref");
    const token = searchParams.get("token") ?? "";

    if (!reference) {
      setMessage("Invalid payment verification link.");
      setLoading(false);
      return;
    }

    let attempts = 0;
    const verify = async () => {
      try {
        const res = await fetch(`/api/payments/status?tx_ref=${reference}`);
        if (!res.ok) throw new Error("Verification failed");

        const data: { status: string } = await res.json();

        if (data.status?.toUpperCase() === "SUCCESSFUL") {
          setMessage("✅ Payment successful! Redirecting...");
          setLoading(false);
          setTimeout(() => navigate("/"), 2000);
        } else if (data.status?.toUpperCase() === "FAILED") {
          setMessage("❌ Payment failed. Redirecting to retry...");
          setLoading(false);
          setTimeout(() => navigate(`/payment/retry?token=${token}`), 2000);
        } else {
          // still pending
          if (attempts < 3) {
            attempts++;
            setMessage("⏳ Still processing... retrying...");
            setTimeout(verify, 2000);
          } else {
            setMessage("⚠️ Unable to confirm. Redirecting to retry...");
            setLoading(false);
            setTimeout(() => navigate(`/payment/retry?token=${token}`), 2000);
          }
        }
      } catch {
        if (attempts < 3) {
          attempts++;
          setMessage("⏳ Network issue... retrying...");
          setTimeout(verify, 2000);
        } else {
          setMessage("⚠️ Error verifying payment. Redirecting to retry...");
          setLoading(false);
          setTimeout(() => navigate(`/payment/retry?token=${token}`), 2000);
        }
      }
    };

    verify();
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Payment Verification</h1>
        {loading && (
          <div className="flex justify-center mb-3">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PaymentVerifyPage;
