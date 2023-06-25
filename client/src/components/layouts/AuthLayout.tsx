interface MainProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="bg-base-200 mx-auto rounded shadow-md h-full w-full flex p-4 duration-300">
      {children}
    </div>
  );
};

export default AuthLayout;
