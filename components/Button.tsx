import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

const Button = ({ text, link, className }: ButtonProps) => {
  return (
    <Link href={link} className={className}>
      {text}
    </Link>
  );
};

export default Button;
