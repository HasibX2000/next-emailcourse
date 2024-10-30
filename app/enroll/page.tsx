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

const REGULAR_PRICE = "৫০০০";
const DISCOUNTED_PRICE = "২৫০০";
const SUPER_DISCOUNTED_PRICE = "১০০০";
const VALID_COUPON = "50OFF";
const SUPER_COUPON = "SUPER80";

const isSuperCouponValid = () => {
  const expirationDate = new Date("2024-10-07");
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
    if (appliedCoupon === SUPER_COUPON && isSuperCouponValid()) {
      return SUPER_DISCOUNTED_PRICE;
    }
    return appliedCoupon === VALID_COUPON ? DISCOUNTED_PRICE : REGULAR_PRICE;
  }, [appliedCoupon]);

  const handleApplyCoupon = () => {
    if (couponCode === SUPER_COUPON && !isSuperCouponValid()) {
      alert("এই কুপনের মেয়াদ শেষ হয়ে গেছে!");
      return;
    }
    setAppliedCoupon(couponCode);
  };

  const renderPaymentInstructions = () => {
    if (paymentmethod === "bank") {
      const bankInfo = PAYMENT_INFO.bank;
      return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">ব্যাংক ট্রান্সফার তথ্য</h2>
          <p className="font-bold text-sm bg-yellow-400 px-3 ">
            অবশ্যই NBSP করবেন, না হলে পেমেন্ট কনফার্ম হওয়ার আগ পর্যন্ত একসেস পাবেন না
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="font-medium">ব্যাংকের নাম:</span>
            <span>{bankInfo.name}</span>
            <span className="font-medium">অ্যাকাউন্ট নাম:</span>
            <span>{bankInfo.accountName}</span>
            <span className="font-medium">অ্যাকাউন্ট নম্বর:</span>
            <span>{bankInfo.account}</span>
            <span className="font-medium">শাখা:</span>
            <span>{bankInfo.branch}</span>
            <span className="font-medium">শাখা কোড:</span>
            <span>{bankInfo.branchCode}</span>
          </div>
        </div>
      );
    }

    const info = PAYMENT_INFO[paymentmethod];
    return (
      <div className="space-y-4">
        <p className="text-sm">
          <span className="font-bold">{finalPrice} টাকা</span> সেন্ড মানি করুন এই নম্বরে:{" "}
          <span className="bg-yellow-400 px-2 py-1 rounded">{info.number}</span>
        </p>
        {info.qr && (
          <div className="bg-white p-4 rounded-lg inline-block">
            <Image
              src={info.qr}
              alt={`${paymentmethod} QR কোড`}
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
        <h1 className="text-3xl font-bold text-center mb-8">কোর্স এনরোলমেন্ট</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <section className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">ব্যক্তিগত তথ্য</h2>

            <div className="space-y-4">
              <InputField
                label="পূর্ণ নাম"
                {...register("name", { required: "নাম আবশ্যক" })}
                error={errors.name}
                placeholder="আপনার পূর্ণ নাম লিখুন"
              />

              <InputField
                label="ইমেইল ঠিকানা"
                type="email"
                {...register("email", { required: "ইমেইল আবশ্যক" })}
                error={errors.email}
                placeholder="your.email@gmail.com"
                hint="কোর্স অ্যাক্সেসের জন্য জিমেইল ব্যবহার করুন"
              />

              <InputField
                label="ফোন নম্বর"
                {...register("phone", { required: "ফোন নম্বর আবশ্যক" })}
                error={errors.phone}
                placeholder="01XXXXXXXXX"
              />
            </div>
          </section>

          {/* Payment Section */}
          <section className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">পেমেন্টের তথ্য</h2>

            {/* Coupon Field */}
            <div className="flex gap-2">
              <input
                {...register("coupon")}
                placeholder="কুপন কোড আছে? না থাকলে হোয়াটসঅ্যাপে যোগাযোগ করুন"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-dark"
              >
                অ্যাপ্লাই করুন
              </button>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <label className="block font-medium">পেমেন্ট মেথড সিলেক্ট করুন</label>
              <select {...register("paymentmethod")} className="w-full px-4 py-2 border rounded-lg">
                <option value="bkash">বিকাশ</option>
                <option value="rocket">রকেট</option>
                <option value="bank">ব্যাংক ট্রান্সফার</option>
              </select>
            </div>

            {/* Payment Instructions */}
            <div className="bg-gray-50 p-4 rounded-lg">{renderPaymentInstructions()}</div>

            {/* Transaction ID */}
            <InputField
              label="ট্রাঞ্জেকশন আইডি"
              {...register("trxid", { required: "ট্রাঞ্জেকশন আইডি অবশ্যই দিতে হবে" })}
              error={errors.trxid}
              placeholder="এখানে ট্রাঞ্জেকশন আইডি লিখুন"
            />
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-dark 
                     disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "প্রক্রিয়াকরণ হচ্ছে..." : "এনরোলমেন্ট সম্পন্ন করুন"}
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
