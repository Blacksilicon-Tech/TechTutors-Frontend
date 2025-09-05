import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentVerifyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      // ✅ Paystack always returns reference (sometimes also trxref, but they are same)
      const txRef = searchParams.get("reference") || searchParams.get("trxref");

      if (!txRef) {
        setMessage("Invalid payment verification link.");
        return;
      }

      try {
        const res = await fetch(`/api/payments/status?tx_ref=${txRef}`);
        if (!res.ok) throw new Error("Verification failed");

        const data: { status: string } = await res.json();

        if (data.status?.toUpperCase() === "SUCCESSFUL") {
          setMessage("✅ Payment successful! Redirecting...");
          setTimeout(() => navigate("/"), 2000);
        } else {
          setMessage("❌ Payment failed. Redirecting to retry...");
          setTimeout(() => navigate(`/payment/retry?tx_ref=${txRef}`), 2000);
        }
      } catch (err) {
        setMessage("⚠️ Error verifying payment. Redirecting to retry...");
        setTimeout(
          () => navigate(`/payment/retry?tx_ref=${txRef ?? ""}`),
          2000
        );
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Payment Verification</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PaymentVerifyPage;
