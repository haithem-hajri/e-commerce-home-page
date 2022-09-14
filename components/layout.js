import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div className=" bg-[#f5f5f5] ">
      <Navbar />
      <main>{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
