import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const initPayment = async () => {
      if (!token) return;

      try {
        // ✅ Ask backend to create Paystack transaction
        const res = await fetch(`/api/payments/create?token=${token}`, {
          method: "POST",
        });
        if (!res.ok) throw new Error("Failed to create payment");
        const data = await res.json();

        // ✅ Redirect user to Paystack checkout URL
        window.location.href = data.checkoutUrl;
      } catch (err) {
        console.error(err);
        alert("Error initializing payment");
      }
    };

    initPayment();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to Paystack...</p>
    </div>
  );
};

export default PaymentPage;
