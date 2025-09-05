import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

interface RegistrationResponse {
  course: string;
  amount: number;
}

const PaymentRetryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const [course, setCourse] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!token) return;

      try {
        const res = await fetch(`/api/registrations/by-token?token=${token}`);
        if (!res.ok) throw new Error("Failed to fetch registration details");

        const data: RegistrationResponse = await res.json();
        setCourse(data.course);
        setAmount(data.amount);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [token]);

  const handleRetry = async () => {
    if (!token) return;

    try {
      const res = await fetch(`/api/payments/create?token=${token}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to re-initiate payment");

      const data: { checkoutUrl: string } = await res.json();
      window.location.href = data.checkoutUrl;
    } catch (err) {
      alert("Error retrying payment. Please contact support.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading retry page...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md">
        <h1 className="text-xl font-bold mb-4">Retry Payment</h1>
        <p className="mb-2">
          Course: <span className="font-semibold">{course ?? "Unknown"}</span>
        </p>
        <p className="mb-6">
          Amount:{" "}
          <span className="font-semibold">
            {amount !== null ? `₦${amount}` : "N/A"}
          </span>
        </p>
        <button
          onClick={handleRetry}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentRetryPage;
