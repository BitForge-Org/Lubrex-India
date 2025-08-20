import Navbar from "./componets/layout/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16 flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
