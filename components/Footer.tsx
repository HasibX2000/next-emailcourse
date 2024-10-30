import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-primary text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center">© {new Date().getFullYear()} আকনস জোন। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
};

export default Footer;
