import Link from "next/link";
import Container from "@/components/Container";
import { Mail, Code, PenTool, LayoutGrid } from "lucide-react";

const youtubeVideos = [
  {
    id: 1,
    title: "অ্যাডভান্সড মেইলচিম্প ইমেইল টেমপ্লেট ডিজাইন",
    icon: Mail,
    body: "মেইলচিম্পের জন্য শক্তিশালী, আকর্ষণীয় এবং কার্যকরী ইমেইল টেমপ্লেট তৈরি করতে শিখুন",
    link: "https://www.youtube.com/watch?v=zYVXw4iPjaQ&list=PLQyD_-zcGqUbduOfAgWN2YYRp2_pzUFc9",
  },
  {
    id: 6,
    title: "প্রফেশনাল ক্লাভিয়ো ইমেইল টেমপ্লেট ডিজাইন",
    icon: Mail,
    body: "ক্লাভিয়ো ব্যবহার করে আকর্ষণীয় এবং কার্যকরী ইমেইল টেমপ্লেট তৈরি করতে শিখুন।",
    link: "https://www.youtube.com/watch?v=X74e5OhkRiI&list=PLQyD_-zcGqUZmLJik7YKa0d4nv7_DKspK&pp=gAQBiAQB",
  },
  {
    id: 4,
    title: "প্রফেশনাল ক্লিকেবল ইমেইল সিগনেচার ডিজাইন",
    icon: Mail,
    body: "আপনার ইমেইলকে আরও পেশাদার দেখাতে ক্লিকযোগ্য ইমেইল স্বাক্ষর ডিজাইন করতে শিখুন।",
    link: "https://www.youtube.com/watch?v=yYjtcg5WUDo&list=PLQyD_-zcGqUa6mBixpZ_2K752iAhGGJMq&pp=gAQBiAQB",
  },
  {
    id: 2,
    title: "অ্যাডভান্সড সিএসএস ফ্লেক্সবক্স বাংলা টিউটোরিয়াল",
    icon: LayoutGrid,
    body: "ফ্লেক্সবক্স ব্যবহার করে ওয়েব পেজ লেআউট তৈরি করার উপর অ্যাডভান্সড টিউটোরিয়াল।",
    link: "https://www.youtube.com/watch?v=rtwUbuvg_IA&list=PLQyD_-zcGqUYjXGMQ5PH-y_KrOFpxfeVJ",
  },
  {
    id: 3,
    title: "ভিজ্যুয়াল স্টুডিও কোড থিম ডিজাইন টিউটোরিয়াল",
    icon: Code,
    body: "ভিএস কোডের জন্য থিম ডিজাইন করতে শিখুন এবং আপনার কোডিং অভিজ্ঞতা উন্নত করুন।",
    link: "https://www.youtube.com/watch?v=Ll3ytD1yMRg&list=PLQyD_-zcGqUYg1WpPdHn9wAQw88MO0qjp&pp=gAQBiAQB",
  },
  {
    id: 5,
    title: "বিগিনারদের জন্য বাংলা প্রফেশনাল অটোক্যাড টিউটোরিয়াল",
    icon: PenTool,
    body: "অটোক্যাড ব্যবহার করে ডিজাইন এবং ড্রাফটিং শেখার জন্য সম্পূর্ণ বাংলা টিউটোরিয়াল।",
    link: "https://www.youtube.com/watch?v=AsO1J6pHoCE&list=PLQyD_-zcGqUbJzlz01KRAoVmRzXaiQrMM&pp=gAQBiAQB",
  },
];

export default function FreeCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ফ্রি কোর্সসমূহ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ইমেইল ডেভেলপমেন্ট, ওয়েব ডিজাইন এবং আরও অনেক কিছু কভার করা আমাদের ফ্রি টিউটোরিয়াল
            দেখুন। আজই শেখা শুরু করুন!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <Link
              href={video.link}
              key={video.id}
              target="_blank"
              className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <video.icon className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-semibold group-hover:text-dark transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">{video.body}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-medium text-dark hover:text-blue-700">
                  এখনই দেখুন
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
