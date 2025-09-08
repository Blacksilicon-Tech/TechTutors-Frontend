// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// interface RegistrationResponse {
//   course: string;
//   amount: number;
// }

// const PaymentRetryPage: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const txRef = searchParams.get("tx_ref"); // ✅ now retry uses txRef
//   const [course, setCourse] = useState<string | null>(null);
//   const [amount, setAmount] = useState<number | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       if (!txRef) return;

//       try {
//         const res = await fetch(`/api/payments/status?tx_ref=${txRef}`);
//         if (!res.ok) throw new Error("Failed to fetch payment details");

//         const data: RegistrationResponse & { status: string } =
//           await res.json();
//         setCourse(data.course ?? "Unknown");
//         setAmount(data.amount ?? null);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [txRef]);

//   const handleRetry = async () => {
//     if (!txRef) return;

//     try {
//       const res = await fetch(`/api/payments/create?tx_ref=${txRef}`, {
//         method: "POST",
//       });
//       if (!res.ok) throw new Error("Failed to re-initiate payment");

//       const data: { checkoutUrl: string } = await res.json();
//       window.location.href = data.checkoutUrl;
//     } catch (err) {
//       alert("Error retrying payment. Please contact support.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading retry page...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md">
//         <h1 className="text-xl font-bold mb-4">Retry Payment</h1>
//         <p className="mb-2">
//           Course: <span className="font-semibold">{course ?? "Unknown"}</span>
//         </p>
//         <p className="mb-6">
//           Amount:{" "}
//           <span className="font-semibold">
//             {amount !== null ? `₦${amount}` : "N/A"}
//           </span>
//         </p>
//         <button
//           onClick={handleRetry}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Retry Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentRetryPage;

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
      const res = await fetch(`/api/payments/create?tx_ref=${txRef}`, {
        method: "POST",
      });

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
