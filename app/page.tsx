"use client";

import Container from "@/components/Container";
import { PlayCircle, CheckCircle, Star, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const modules = [
  {
    id: "01",
    title: "Introduction To The HTML",
    videos: "08",
    duration: "01:27:11",
  },
  {
    id: "02",
    title: "Introduction To The CSS",
    videos: "11",
    duration: "02:16:35",
  },
  {
    id: "03",
    title: "Email Design Fundamental Theory",
    videos: "08",
    duration: "01:38:08",
  },
  {
    id: "04",
    title: "Design A Complete Email Template",
    videos: "08",
    duration: "01:17:10",
  },
  {
    id: "05",
    title: "Design Idea Generation",
    videos: "02",
    duration: "00:30:57",
  },
  {
    id: "06",
    title: "Design Concept Convert to HTML & CSS",
    videos: "07",
    duration: "00:45:31",
  },
  {
    id: "07",
    title: "Introduction To Our Exclusive Extension",
    videos: "09",
    duration: "00:40:49",
  },
  {
    id: "08",
    title: "PSD to Email Template Design 01",
    videos: "06",
    duration: "00:44:17",
  },
  {
    id: "09",
    title: "PSD to Email Template Design 02",
    videos: "06",
    duration: "00:41:50",
  },
  {
    id: "10",
    title: "PSD to Email Template Design 03",
    videos: "07",
    duration: "01:02:32",
  },
  {
    id: "11",
    title: "PSD to Email Template Design 04",
    videos: "04",
    duration: "00:34:09",
  },
  {
    id: "12",
    title: "PSD to Email Template Design 05",
    videos: "07",
    duration: "00:40:20",
  },
  {
    id: "13",
    title: "PSD to Email Template Design 06",
    videos: "09",
    duration: "01:02:28",
  },
  {
    id: "14",
    title: "PSD to Email Template Design 07",
    videos: "01",
    duration: "01:33:42",
  },
  {
    id: "15",
    title: "Tricky Email Designs",
    videos: "02",
    duration: "00:10:47",
  },
  {
    id: "16",
    title: "Live Clients Email Template Design",
    videos: "01",
    duration: "01:20:52",
  },
  {
    id: "17",
    title: "Figma Design To Email Template",
    videos: "02",
    duration: "02:50:44",
  },
];

const courseFeatures = [
  "Lifetime access to 100+ email templates",
  "Practical real-world projects",
  "Exclusive VSCode extensions and tools",
  "Industry-standard best practices",
  "Responsive design techniques",
  "Personal project feedback",
  "Community access",
];

const prerequisites = [
  "Basic knowledge of computers and internet",
  "Any text editor (VS Code recommended)",
  "No design experience needed",
  "Computer with internet connection",
  "Strong work ethic",
  "Ability to think outside the box",
];

const testimonials = [
  {
    name: "Farzana Ahmed",
    role: "Enrolled Student",
    comment:
      "This course changed my perspective on email design. The practical projects are invaluable.",
    rating: 5,
    avatar: "/images/avatar_01.png",
  },
  {
    name: "Mahabubur Rahman",
    role: "Enrolled Student",
    comment:
      "The course content is comprehensive and the practical projects are a great way to apply the learned concepts.",
    rating: 5,
    avatar: "/images/avatar_02.png",
  },
  {
    name: "Rahul Das",
    role: "Enrolled Student",
    comment:
      "The course content is well-structured and the instructor's explanations are clear and helpful.",
    rating: 5,
    avatar: "/images/avatar_03.png",
  },
];

const faqs = [
  {
    question: "How long will I have access to the course?",
    answer: "You'll get lifetime access to all course materials including future updates.",
  },
  {
    question: "Is there any support available during the course?",
    answer: "Yes, you can access our community forum and direct support from the instructor.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "No, we don't provide certificates for our courses. However, you'll gain valuable skills and experience that will be beneficial for your career.",
  },
  {
    question: "How much time should I allocate for this course?",
    answer: "We recommend allocating 19 hours and 18 minutes for this course.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes, even if you have basic computer knowledge and no design experience, you'll be able to follow along with the course.",
  },
  {
    question: "How can I access the course content?",
    answer:
      "You can access the course content through our platform, which includes video tutorials, practical projects, and exclusive VSCode extensions.",
  },
];

const instructor = {
  name: "Akon M Hasib",
  title: "Senior Email Developer | Frontend Developer",
  bio: "Experienced email developer working with major brands. Passionate about teaching and helping others master email development.",
  avatar: "/images/akon_m_hasib.jpg",
  socialLinks: {
    facebook: "https://www.facebook.com/groups/akonszone",
    youtube: "https://www.youtube.com/@AkonsZone",
  },
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
            alt="Professional Email Design Course"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Email Design With HTML & CSS</h1>
            <p className="text-sm mb-6">Email Template Design with HTML and CSS</p>

            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
              <p className="text-gray-700">
                Master the art of email template design through our comprehensive course. Learn
                everything from HTML and CSS basics to advanced email design techniques, practical
                projects, and exclusive VSCode extensions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>
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
                          <p className="text-sm text-gray-600">{module.videos} Videos</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{module.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-2xl font-bold mb-4">Course Details</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">Course Fee</p>
                <p className="text-2xl font-bold text-primary">2999 TK</p>
              </div>
              <div>
                <p className="font-semibold">Total Modules</p>
                <p className="text-gray-600">{modules.length} Modules</p>
              </div>
              <div>
                <p className="font-semibold">Total Videos</p>
                <p className="text-gray-600">98 Videos</p>
              </div>
              <div>
                <p className="font-semibold">Total Duration</p>
                <p className="text-gray-600">19 Hours 18 Minutes</p>
              </div>
              <div>
                <p className="font-semibold">Level</p>
                <p className="text-gray-600">Beginner to Advanced</p>
              </div>
            </div>

            <div className="mb-6 bg-white p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bonus</span>
                  <span>VSCode Extension</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Assignments</span>
                  <span>15 Projects</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Support</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push("/enroll")}
              className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-dark transition-colors"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Course Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">What You&apos;ll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Stats */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Course Statistics</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-dark">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-600">4.9</p>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">500+</p>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-orange-600">19 Hours+</p>
                <p className="text-gray-600">Course Duration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Course Prerequisites</h2>
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
          <h2 className="text-2xl font-semibold mb-6">Your Instructor</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image src={instructor.avatar} alt={instructor.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-dark">{instructor.title}</p>
              <p className="mt-3 text-gray-700">{instructor.bio}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={instructor.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook Community
                </a>
                <a
                  href={instructor.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Student Testimonials</h2>
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
          <h2 className="text-2xl font-semibold mb-8">Course FAQs</h2>
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
