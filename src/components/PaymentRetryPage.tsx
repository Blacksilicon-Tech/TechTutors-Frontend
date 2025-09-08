import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const PaymentRetryPage = () => {
  const [searchParams] = useSearchParams();
  const txRef = searchParams.get("tx_ref");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const retryPayment = async () => {
    if (!txRef) {
      setError("Missing transaction reference.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api-growtechafrica.blacksillicon.com/api/payments/create?tx_ref=${txRef}`,

        {
          method: "POST",
        }
      );

      if (!res.ok) throw new Error("Retry failed");

      const data = await res.json();

      sessionStorage.setItem("txRef", data.txRef);

      // Redirect again to Paystack checkout
      window.location.href = data.checkoutUrl;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Payment Failed</h1>
      <p className="mb-6 text-gray-600">
        Your payment attempt was not successful. Please try again.
      </p>

      <button
        onClick={retryPayment}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Retrying..." : "Retry Payment"}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default PaymentRetryPage;
