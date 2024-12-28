import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "./Container";

const NAV_LINKS = [
  {
    text: "Contact",
    link: "https://wa.me/8801754752096",
    className:
      "bg-primary hover:bg-dark text-white px-6 py-2 rounded-full transition-colors duration-300",
  },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-2  z-50">
      <Container className="flex items-center justify-between">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image src="/images/logo.png" alt="Akon M Hasib" priority width={100} height={100} />
        </Link>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Button key={link.text} text={link.text} link={link.link} className={link.className} />
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
