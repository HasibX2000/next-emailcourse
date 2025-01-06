import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white text-dark py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center">© {new Date().getFullYear()} Akons Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
