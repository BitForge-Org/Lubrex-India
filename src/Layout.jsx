import Navbar from "./componets/layout/Navbar";
import Footer from "./componets/layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
