"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Container from "@/components/Container";

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  paymentmethod: "bkash" | "rocket" | "bank";
  trxid: string;
  coupon: string;
  course: "professional";
}

const PAYMENT_INFO = {
  bkash: {
    number: "01754752096",
    qr: "/images/bkash.webp",
  },
  rocket: {
    number: "01754752096-2",
    qr: "/images/rocket.webp",
  },
  bank: {
    name: "Sonali Bank PLC",
    account: "0304601001296",
    branch: "Corporate Branch, Barisal",
    branchCode: "03046",
    accountName: "Md. Hasibur Rahman",
  },
};

const REGULAR_PRICE = "2999";
const NEW_YEAR_PRICE = "555";
const NEW_YEAR_COUPON = "NEWYEAR555";

const isNewYearCouponValid = () => {
  const expirationDate = new Date("2024-12-31");
  return new Date() <= expirationDate;
};

export default function ProfessionalEnroll() {
  const [appliedCoupon, setAppliedCoupon] = React.useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormData>({
    defaultValues: {
      paymentmethod: "bkash",
      course: "professional",
      coupon: "",
    },
  });

  const paymentmethod = watch("paymentmethod");
  const couponCode = watch("coupon");
  const finalPrice = React.useMemo(() => {
    if (appliedCoupon === NEW_YEAR_COUPON && isNewYearCouponValid()) {
      return NEW_YEAR_PRICE;
    }
    return REGULAR_PRICE;
  }, [appliedCoupon]);

  const handleApplyCoupon = () => {
    if (couponCode === NEW_YEAR_COUPON && !isNewYearCouponValid()) {
      alert("This coupon has expired!");
      return;
    }
    setAppliedCoupon(couponCode);
  };

  const renderPaymentInstructions = () => {
    if (paymentmethod === "bank") {
      const bankInfo = PAYMENT_INFO.bank;
      return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Bank Transfer Information</h2>
          <p className="font-bold text-sm bg-yellow-500 px-3 ">
            <span className="font-bold">Send {finalPrice} Taka</span> | You must use NBSP, otherwise
            you won&apos;t get access until payment is confirmed
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="font-medium">Bank Name:</span>
            <span>{bankInfo.name}</span>
            <span className="font-medium">Account Name:</span>
            <span>{bankInfo.accountName}</span>
            <span className="font-medium">Account Number:</span>
            <span>{bankInfo.account}</span>
            <span className="font-medium">Branch:</span>
            <span>{bankInfo.branch}</span>
            <span className="font-medium">Branch Code:</span>
            <span>{bankInfo.branchCode}</span>
          </div>
        </div>
      );
    }

    const info = PAYMENT_INFO[paymentmethod];
    return (
      <div className="space-y-4">
        <p className="text-sm">
          <span className="font-bold">Send {finalPrice} Taka</span> to this number:{" "}
          <span className="bg-yellow-500 px-2 py-1 rounded">{info.number}</span>
        </p>
        {info.qr && (
          <div className="bg-white p-4 rounded-lg inline-block">
            <Image
              src={info.qr}
              alt={`${paymentmethod} QR Code`}
              width={128}
              height={128}
              className="w-32"
            />
          </div>
        )}
      </div>
    );
  };

  const onSubmit = async (data: EnrollmentFormData) => {
    try {
      await emailjs.send(
        "service_zwpwurn",
        "template_vu4zmmi",
        { ...data, finalPrice },
        "Sy1YPdwhvBydzFZz4"
      );
      router.push(
        `/enroll/confirmation?name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(
          data.email
        )}`
      );
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <Container>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Course Enrollment</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <section className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

            <div className="space-y-4">
              <InputField
                label="Full Name"
                {...register("name", { required: "Name is required" })}
                error={errors.name}
                placeholder="Enter your full name"
              />

              <InputField
                label="Email Address"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={errors.email}
                placeholder="your.email@gmail.com"
                hint="Use Gmail for course access"
              />

              <InputField
                label="Phone Number"
                {...register("phone", { required: "Phone number is required" })}
                error={errors.phone}
                placeholder="01XXXXXXXXX"
              />
            </div>
          </section>

          {/* Payment Section */}
          <section className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

            {/* Coupon Field */}
            <div className="flex flex-col gap-2">
              <input
                {...register("coupon")}
                placeholder="Have a coupon code? If not, contact us on WhatsApp"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-dark"
              >
                Apply
              </button>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <label className="block font-medium">Select Payment Method</label>
              <select {...register("paymentmethod")} className="w-full px-4 py-2 border rounded-lg">
                <option value="bkash">bKash</option>
                <option value="rocket">Rocket</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            {/* Payment Instructions */}
            <div className="bg-gray-50 p-4 rounded-lg">{renderPaymentInstructions()}</div>

            {/* Transaction ID */}
            <InputField
              label="Transaction ID"
              {...register("trxid", { required: "Transaction ID is required" })}
              error={errors.trxid}
              placeholder="Enter your transaction ID here"
            />
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-dark 
                     disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Processing..." : "Complete Enrollment"}
          </button>
        </form>
      </div>
    </Container>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
  hint?: string;
}

function InputField({ label, error, hint, ...props }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block font-medium text-sm">
        {label}
        {hint && <span className="ml-2 text-xs bg-yellow-100 px-2 py-0.5 rounded">{hint}</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
      />
      {error?.message && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
