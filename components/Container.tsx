interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={`container mx-auto px-5 sm:px-0 py-2 ${className}`}>{children}</div>;
};

export default Container;
