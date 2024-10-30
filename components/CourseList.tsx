import Image from "next/image";
import Container from "./Container";
import professionalThumb from "@/public/images/professional.webp";
import Link from "next/link";

const CourseList = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">আমাদের কোর্সসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <Image
            src={professionalThumb}
            alt="এইচটিএমএল এবং সিএসএস দিয়ে ইমেইল ডিজাইন কোর্স থাম্বনেইল"
            className="rounded-md"
            priority
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-primary text-3xl font-bold">
              এইচটিএমএল এবং সিএসএস দিয়ে ইমেইল ডিজাইন
            </h2>
            <p className="text-primary text-lg font-light">
              এই কোর্সটি ইমেইল টেমপ্লেট ডিজাইনের জন্য সমস্ত মৌলিক তত্ত্ব, প্রয়োজনীয় এইচটিএমএল এবং
              সিএসএস, ১২টি প্রজেক্ট, গোপন ভিএস কোড এক্সটেনশন সহ কভার করে। এটি বিগিনারদের জন্য ডিজাইন
              করা হয়েছে যারা বাস্তব প্রজেক্ট নিয়ে ইমেইল ডিজাইনে ক্যারিয়ার গড়তে চায়।
            </p>
            <Link
              href="/course"
              className="px-10 bg-primary hover:bg-dark text-white py-2 rounded-md text-xl font-semibold w-fit"
            >
              কোর্স দেখুন
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseList;
