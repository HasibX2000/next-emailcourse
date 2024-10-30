"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") ?? "User";
  const email = searchParams?.get("email") ?? "your email";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-600 mb-2">Enrollment Successful!</h1>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="text-gray-600 mb-6">
          <p className="mb-2">
            Thank you for enrolling, <span className="font-semibold">{name}</span>!
          </p>
          <p>
            We have sent a confirmation email to <span className="font-semibold">{email}</span>
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
