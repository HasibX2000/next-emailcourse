"use client";

import Container from "@/components/Container";
import { PlayCircle, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const modules = [
  {
    id: "01",
    title: "এইচটিএমএল পরিচিতি",
    videos: "০৮",
    duration: "০১:২৭:১১",
  },
  {
    id: "02",
    title: "সিএসএস পরিচিতি",
    videos: "১১",
    duration: "০২:১৬:৩৫",
  },
  {
    id: "03",
    title: "ইমেইল ডিজাইনের মৌলিক তত্ত্ব",
    videos: "০৮",
    duration: "০১:৩৮:০৮",
  },
  {
    id: "04",
    title: "একটি পূর্ণাঙ্গ ইমেইল টেমপ্লেট ডিজাইন",
    videos: "০৮",
    duration: "০১:১৭:১০",
  },
  {
    id: "05",
    title: "ডিজাইন আইডিয়া জেনারেশন",
    videos: "০২",
    duration: "০০:৩০:৫৭",
  },
  {
    id: "06",
    title: "ডিজাইন কনসেপ্ট HTML এবং CSS-এ রূপান্তর",
    videos: "০৭",
    duration: "০০:৪৫:৩১",
  },
  {
    id: "07",
    title: "আমাদের এক্সক্লুসিভ এক্সটেনশন পরিচিতি",
    videos: "০৯",
    duration: "০০:৪০:৪৯",
  },
  {
    id: "08",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০১",
    videos: "০৬",
    duration: "০০:৪৪:১৭",
  },
  {
    id: "09",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০২",
    videos: "০৬",
    duration: "০০:৪১:৫০",
  },
  {
    id: "10",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০৩",
    videos: "০৭",
    duration: "০১:০২:৩২",
  },
  {
    id: "11",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০৪",
    videos: "০৪",
    duration: "০০:৩৪:০৯",
  },
  {
    id: "12",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০৫",
    videos: "০৭",
    duration: "০০:৪০:২০",
  },
  {
    id: "13",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০৬",
    videos: "০৯",
    duration: "০১:০২:২৮",
  },
  {
    id: "14",
    title: "পিএসডি থেকে ইমেইল টেমপ্লেট ০৭",
    videos: "০১",
    duration: "০১:৩৩:৪২",
  },
  {
    id: "15",
    title: "কমপ্লেক্স ডিজাইন যেভাবে করতে হয় ",
    videos: "০২",
    duration: "০০:১০:৪৭",
  },
  {
    id: "16",
    title: "লাইভ ক্লায়েন্ট এর ইমেইল টেমপ্লেট ডিজাইন",
    videos: "০১",
    duration: "০১:২০:৫২",
  },
  {
    id: "17",
    title: "ফিগমা থেকে ইমেইল টেমপ্লেট ডিজাইন",
    videos: "০২",
    duration: "০২:৫০:৪৪",
  },
];

const courseFeatures = [
  "১০০+ ইমেইল টেমপ্লেটে আজীবন অ্যাক্সেস",
  "প্র্যাকটিক্যাল রিয়েল-ওয়ার্ল্ড প্রজেক্ট",
  "এক্সক্লুসিভ ভিএসকোড এক্সটেনশন এবং টুলস",
  "ইন্ডাস্ট্রি-স্ট্যান্ডার্ড বেস্ট প্র্যাকটিস",
  "রেসপনসিভ ডিজাইন টেকনিক",
  "ব্যক্তিগত প্রজেক্ট ফিডব্যাক",
  "কমিউনিটি অ্যাক্সেস",
];

const prerequisites = [
  "কম্পিউটার ও ইন্টারনেট সম্পর্কে মৌলিক জ্ঞান",
  "যেকোনো টেক্সট এডিটর (ভিএস কোড রেকমেন্ডেড)",
  "ডিজাইন অভিজ্ঞতার প্রয়োজন নেই",
  "ইন্টারনেট সংযোগসহ একটি কম্পিউটার",
  "কঠোর পরিশ্রমী মনোভাব",
  "বক্সের বাইরে চিন্তা করার ক্ষমতা",
];

const testimonials = [
  {
    name: "ফারজানা আহমেদ",
    role: "এনরোলড স্টুডেন্ট",
    comment:
      "এই কোর্স আমার ইমেইল ডিজাইনের দৃষ্টিভঙ্গি পরিবর্তন করেছে। প্র্যাকটিক্যাল প্রজেক্টগুলো খুবই মূল্যবান।",
    rating: 5,
    avatar: "/images/avatar_01.png",
  },
  {
    name: "মাহাবুবুর হমান",
    role: "এনরোলড স্টুডেন্ট",
    comment:
      "ইমেইল ডেভেলপমেন্টের সম্পূর্ণ কভারেজ। শুধুমাত্র ভিএসকোড এক্সটেনশনগুলোই মূল্যের চেয়ে বেশি।",
    rating: 5,
    avatar: "/images/avatar_02.png",
  },
  {
    name: "রাহাত হোসেন",
    role: "এনরোলড স্টুডেন্ট",
    comment:
      "ডিজাইন থিওরি এবং প্র্যাকটিক্যাল ইমপ্লিমেন্টেশনের পারফেক্ট সমন্বয়। অত্যন্ত রেকমেন্ডেড!",
    rating: 5,
    avatar: "/images/avatar_03.png",
  },
];

const faqs = [
  {
    question: "কোর্সে কতদিন অ্যাক্সেস পাব?",
    answer: "আপনি ভবিষ্যত আপডেটসহ সমস্ত কোর্স মেটেরিয়ালে আজীবন অ্যাক্সেস পাবেন।",
  },
  {
    question: "কোর্স চলাকালীন সাপোর্ট দেওয়া হয়?",
    answer: "হ্যাঁ, আপনি আমাদের কমিউনিটি ফোরাম এবং সরাসরি ইনস্ট্রাক্টর সাপোর্ট পাবেন।",
  },
  {
    question: "কোর্স শেষে সার্টিফিকেট দেওয়া হয়?",
    answer:
      "বর্তমানে আমরা কোর্স সমাপ্তির জন্য সার্টিফিকেট প্রদান করি না। আমাদের ফোকাস প্র্যাকটিক্যাল স্কিল এবং রিয়েল-ওয়ার্ল্ড প্রজেক্ট অভিজ্ঞতার উপর।",
  },
  {
    question: "রিফান্ড পলিসি কী?",
    answer:
      "এনরোল করার আগে অনুগ্রহ করে কোর্স কারিকুলাম এবং প্রয়োজনীয়তাগুলি ভালভাবে পর্যালোচনা করুন। এনরোল হয়ে গেলে আমরা কোনো প্রকার রিফান্ড প্রদান করিনা",
  },
  {
    question: "কোর্সের ভিডিওগুলি ডাউনলোড করা যাবে?",
    answer:
      "হ্যাঁ, সমস্ত কোর্স কন্টেন্ট গুগল ড্রাইভের মাধ্যমে প্রদান করা হয়। এনরোল করার পর, আপনি অফলাইনে দেখার জন্য সমস্ত মেটেরিয়াল ডাউনলোড করার অ্যাক্সেস পাবেন।",
  },
  {
    question: "কোনো অতিরিক্ত সফটওয়্যার কিনতে হবে?",
    answer:
      "না, আপনি ফ্রি সফটওয়্যার ব্যবহার করে কোর্সটি সম্পন্ন করতে পারবেন। আমরা ভিজ্যুয়াল স্টুডিও কোড সুপারিশ করি, যা ফ্রিতে ডাউনলোড করা যায়।",
  },
  {
    question: "এই কোর্স কি সম্পূর্ণ নতুনদের জন্য উপযুক্ত?",
    answer:
      "হ্যাঁ, যদিও কিছু বেসিক কম্পিউটার জ্ঞান সহায়ক, কোর্সটি মৌলিক বিষয় থেকে শুরু করে ধীরে ধীরে অ্যাডভান্সড টপিকে যায়।",
  },
  {
    question: "কোর্স কন্টেন্ট কীভাবে ডেলিভার করা হয়?",
    answer:
      "ক্রয়ের পর, আপনি একটি গুগল ড্রাইভ ফোল্ডারে অ্যাক্সেস পাবেন যেখানে সমস্ত কোর্স ভিডিও এবং মেটেরিয়াল থাকবে, যা আপনি ডাউনলোড করে চিরকালের জন্য রাখতে পারবেন।",
  },
];

const instructor = {
  name: "আকন এম হাসিব",
  title: "সিনিয়র ইমেইল ডেভেলপার | ফ্রন্টএন্ড ডেভেলপার",
  experience: "৫+ বছর",
  bio: "প্রধান ব্র্যান্ডগুলির সাথে কাজ করা অভিজ্ঞ ইমেইল ডেভেলপার। শেখানো এবং অন্যদের ইমেইল ডেভেলপমেন্ট মাস্টার করতে সাহায্য করার প্রতি আগ্রহী।",
  avatar: "/images/akon_m_hasib.jpg",
};

export default function CoursePage() {
  const router = useRouter();

  return (
    <main className="py-10">
      <Container>
        {/* Hero Image Section */}
        <div className="mb-8 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/professional.webp"
            alt="পেশাদার ইমেইল ডিজাইন কোর্স"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Email Design With HTML & CSS</h1>
            <p className="text-sm mb-6">এইচটিএমএল এবং সিএসএস দিয়ে ইমেইল টেমপ্লেট ডিজাইন</p>

            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-semibold mb-4">কোর্স সম্পর্কে</h2>
              <p className="text-gray-700">
                আমাদের বিস্তৃত কোর্সের মাধ্যমে ইমেইল টেমপ্লেট ডিজাইনের শিল্প আয়ত্ত করুন। এইচটিএমএল
                এবং সিএসএস এর মৌলিক বিষয় থেকে শুরু করে উন্নত ইমেইল ডিজাইন কৌশল, প্র্যাকটিক্যাল
                প্রজেক্ট এবং এক্সক্লুসিভ ভিএসকোড এক্সটেনশন সহ সবকিছু শিখুন।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">কোর্স কারিকুলাম</h2>
              <div className="space-y-4">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <PlayCircle className="w-5 h-5 mt-1 text-primary" />
                        <div>
                          <h3 className="font-semibold text-lg">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.videos} টি ভিডিও</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{module.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Takes up 1 column on large screens */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-2xl font-bold mb-4">কোর্স বিবরণ</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">মোট মডিউল</p>
                <p className="text-gray-600">{modules.length} টি মডিউল</p>
              </div>
              <div>
                <p className="font-semibold">মোট ভিডিও</p>
                <p className="text-gray-600">
                  {modules.reduce((acc, module) => acc + parseInt(module.videos), 0)} টি লেসন
                </p>
              </div>
              <div>
                <p className="font-semibold">মোট সময়</p>
                <p className="text-gray-600">১৯ ঘণ্টা ১৮ মিনিট</p>
              </div>
              <div>
                <p className="font-semibold">লেভেল</p>
                <p className="text-gray-600">বিগিনার থেকে অ্যাডভান্সড</p>
              </div>
            </div>

            <div className="mb-6 bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3">কোর্স অগ্রগতি</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>মেটেরিয়াল</span>
                  <span>১০০+ টেমপ্লেট</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>অ্যাসাইনমেন্ট</span>
                  <span>১৫টি প্রজেক্ট</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>সাপোর্ট</span>
                  <span>২৪/৭ সাপোর্ট</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push("/enroll")}
              className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-dark transition-colors"
            >
              এখনই ভর্তি হোন
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Course Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">আপনি পাবেন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Stats */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">কোর্স স্ট্যাটিকস</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-dark">৯৫%</p>
                <p className="text-gray-600">সফলতার হার</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-600">৪.৯</p>
                <p className="text-gray-600">মোট রেটিং</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">৩০০+</p>
                <p className="text-gray-600">ছাত্রছাত্রী সংখ্যা</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-orange-600">১৯ ঘন্টা+</p>
                <p className="text-gray-600">কন্টেন্টের সময়</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">প্রয়োজনীয় প্রস্তুতি</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prerequisites.map((prerequisite, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">{prerequisite}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">আপনার ইনস্ট্রাক্টর</h2>
          <div className="flex items-start gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image src={instructor.avatar} alt={instructor.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-dark">{instructor.title}</p>
              <p className="text-gray-600 mt-1">{instructor.experience} বছর অভিজ্ঞতা</p>
              <p className="mt-3 text-gray-700">{instructor.bio}</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">ছাত্রার মতামত</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">সাধারণ প্রশ্ন ও উত্তর</h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
