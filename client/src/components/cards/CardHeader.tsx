interface MainProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="card w-full p-4 bg-base-100 shadow-xl mt-6 ">
      <div className="h-full w-full bg-base-100 flex flex-col sm:flex-row gap-y-3">{children}</div>
    </div>
  );
};

export default CardHeader;
