import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setError("Invalid payment link.");
      return;
    }

    const initPayment = async () => {
      try {
        const res = await fetch(
          `https://api-growtechafrica.blacksillicon.com/api/payments/create?token=${token}`,

          {
            method: "POST",
          }
        );

        if (!res.ok) throw new Error("Unable to initialize payment");

        const data = await res.json();

        // Store txRef for later verification
        sessionStorage.setItem("txRef", data.txRef);

        // Redirect user to Paystack checkout page
        window.location.href = data.checkoutUrl;
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      }
    };

    initPayment();
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <p className="text-gray-700">Redirecting to payment...</p>
      )}
    </div>
  );
};

export default PaymentPage;
