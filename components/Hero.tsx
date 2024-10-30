import { FC } from "react";
import Container from "@/components/Container";

const Hero: FC = () => {
  return (
    <div className="bg-primary py-20">
      <Container className="flex gap-6 items-center flex-col">
        <h2 className="text-white text-xl md:text-2xl font-bold text-center">
          আসসালামু আলাইকুম, আমি আকন মোহাম্মাদ হাসিব
        </h2>
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
          Akons Zone এ আপনাকে স্বাগতম
        </h2>
        <p className="text-white text-center px-0 md:px-20">
          &ldquo;ইমেইল টেমপ্লেট ডিজাইন&rdquo; শেখার সবচেয়ে বড় হাবে আপনাকে স্বাগতম। এখানে আপনি
          যেকোনো কোর্সে এনরোল করে আপনার ইমেইল ডিজাইন শেখার যাত্রা শুরু করতে পারেন।
        </p>
      </Container>
    </div>
  );
};

export default Hero;
