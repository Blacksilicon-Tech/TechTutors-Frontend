import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentRetryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);

  const handleRetry = async () => {
    if (!token) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/payments/create?token=${token}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to re-initiate payment");

      const data: { checkoutUrl: string } = await res.json();
      window.location.href = data.checkoutUrl;
    } catch {
      setLoading(false);
      alert("Error retrying payment. Please contact support.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md">
        <h1 className="text-xl font-bold mb-4">Retry Payment</h1>
        <p className="mb-6">Click below to try your payment again.</p>
        <button
          onClick={handleRetry}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Processing..." : "Retry Payment"}
        </button>
      </div>
    </div>
  );
};

export default PaymentRetryPage;
